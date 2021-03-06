const jimp = require("jimp");
const child_process = require("child_process");
const path = require("path");
const os = require('os');
const sema = require('async-sema').Sema;
const stream = require('stream');

const protocol = require("./protocol.js");
const licensing = require("./licensing.js");
const dib = require("./dib.js");

const cpuCount = os.cpus().length;
const maxProcessCount = cpuCount > 0 ? cpuCount * 1 : 1;
const processSema = new sema(maxProcessCount);

const adjustResults = analyzeResults => {
    analyzeResults.forEach(subResult => {
        subResult.valueRaw = Buffer.from(subResult.value64, "base64");
        subResult.value = subResult.valueRaw.toString("utf-8");
        delete subResult.value64;
    });
}

/////////////////////////////////////////////////////

const streamToBuffer = async inputStream => {
    return new Promise((resolve, reject) => {
        var blocks = [];
        var done = false;
        inputStream.on('data', function(block) {
            blocks.push(block);
        });
        inputStream.on('end', function() {
            if (!done) {
                const buffer = Buffer.concat(blocks);
                blocks = [];
                done = true;
                resolve(buffer);
            }
        });
        inputStream.on('close', function() {
            if (!done) {
                const buffer = Buffer.concat(blocks);
                blocks = [];
                done = true;
                resolve(buffer);
            }
        });
        inputStream.on('error', function(error) {
            reject(error);
        });
    });
}

/////////////////////////////////////////////////////

const sanitize = (param, value) => {
    switch (param) {
        case "type":
            if (typeof value === "string")
                return [value];
            if (!Array.isArray(value))
                throw new Error(`Invalid type '${typeof value}' for parameter '${param}'; should be 'string' or array of strings`);
            value.forEach((v) => {
                if (typeof v !== "string")
                    throw new Error(`Invalid type '${typeof v}' in array '${param}'; should be 'string'`);
            });
            return value;
        case "area":
            if (typeof value !== "object")
                throw new Error(`Invalid type '${typeof value}' for parameter '${param}'; should be 'object'`);
            return { x: sanitize("area.x", value.x), y: sanitize("area.y", value.y), width: sanitize("area.width", value.width), height: sanitize("area.height", value.height) };
        case "area.x":
        case "area.y":
        case "area.width":
        case "area.height":
            const ivalue = Number.parseInt(value);
            if (ivalue === NaN)
                throw new Error(`Invalid integer value for parameter '${param}'`);
            return ivalue;
        case "royalMailVariableLengthDecoding":
        case "code39StartStopPatternsAreMandatory":
        case "additionalReadingPass":
            return !!value;
    };
    return undefined;
}

const preprocessOutgoingData = (image, data, lic) => {
    // Add the image input to the data object.
    let sentData = { input: image };

    // Add the processing parameters.
    for (param in data) {
        let value = sanitize(param, data[param]);
        if (typeof value !== "undefined")
            sentData[param] = value;
    }

    // Add the license parameters.
    if (null != lic.oemLicenseKey) { sentData.oem_license_key = lic.oemLicenseKey; }
    if (null != lic.solutionName) { sentData.solution_name = lic.solutionName; }
    if (null != lic.solutionKey) { sentData.solution_key = lic.solutionKey; }

    return sentData;
}

const getWrapper = () => {
    if (process.platform !== "win32" && process.platform !== "linux") {
        throw new Error("Unsupported Operating System (allowed: Linux 64 bit, Windows 64 bit)");
    }

    return path.join(__dirname, "..", "dependencies", process.platform, "bx-wrapper.exe");
}

const analyzeImage = async (image, data, lic) => {
    return new Promise((resolve, reject) => {
        let sentData = preprocessOutgoingData(image, data, lic);

        const child = child_process.spawn(getWrapper());

        // Accumulate the returned information.
        const returnedInfo = [];
        child.stdout.on("data", ret => {
            returnedInfo.push(ret);
        });

        child.stderr.on("data", ret => {
            reject(new Error(new TextDecoder("utf-8").decode(ret)));
        });

        // Finish the promise on exit and stdio streams flushed and closed.
        child.on("close", (code) => {
            let jsonObject = null;
            const joinedInfo = returnedInfo.join("");
            try {
                jsonObject = JSON.parse(joinedInfo);
            } catch(err) {
                reject(new Error(`${err} - ${joinedInfo}`));
                return;
            }

            if (code == 0) {
                if ("error" in jsonObject) {
                    err = jsonObject.error;
                    reject(new Error(`${err.id} - ${err.message}`));
                    return;
                }

                let results = jsonObject.results;
                adjustResults(results);
                resolve(results);
            } else {
                reject(new Error(`Engine process closed with code ${code}`));
            }
        });

        try {
            protocol.sendAnalyzeRequest(child.stdin, sentData);
        } catch(err) {
            // We skip the reject call if it's an EPIPE error -- this should get caught by the stderr data.
            if (!("code" in err && err.code == "EPIPE")) {
                reject(err);
            }
        }
    });
}

const isImage = image =>
    image !== null &&
    typeof image === "object" &&
    typeof image.bitmap === "object" &&
    typeof image.bitmap.width === "number" &&
    typeof image.bitmap.height === "number" &&
    Buffer.isBuffer(image.bitmap.data);

const analyze = async (input, data, lic) => {
    // Wait here if there are too many requests pending.
    await processSema.acquire();
    try {
        let image = null;
        input = await input;
        if (input instanceof stream.Readable) {
            input = await streamToBuffer(input);
        }
        if (typeof input === "string" || Buffer.isBuffer(input) || (typeof input === "object" && input !== null && typeof input.url === "string")) {
            image = await jimp.read(input);
        } else if (isImage(input)) {
            image = input;
        } else {
            throw new Error("Invalid input type. See documentation for valid input types.");
        }

        if (image == null) return null;

        const result = await analyzeImage(dib.convertToDib(image), data, lic);
        if ("error" in result) {
            throw new Error(`${result.error.id} - ${result.error.message}`);
        }

        return result;
    }
    finally {
        processSema.release();
    }
};


/**
 * This object contains 2D information for certain barcode types. It is currently only supported for PDF417 barcode types.
 * Fields will be 0 for unsupported barcode types, or if the reader is otherwise unable to determine the value.
 * @memberof module:barcode-js
 * 
 * @typedef ResultInfo2d
 * @type {object}
 * @property {number} ResultInfo2d.columns -  Specifies the number of columns in the barcode as defined by the indicator pattern.
 * @property {number} ResultInfo2d.columnsDetected -  Specifies the number of columns detected in the barcode image.
 * @property {number} ResultInfo2d.errorCorrectionLevel - Specifies the amount of error correction detected for barcodes that support it.
 * @property {number} ResultInfo2d.rows - Specifies the number of rows in the barcode as defined by the indicator pattern.
 * @property {number} ResultInfo2d.rowsDetected - Specifies the number of rows detected in the barcode image.
 */


/**
 * When reading a barcode, many symbologies will go through state changes that may give extra context as to the content types inside the barcode (eg. Kanji).
 * This member was added to give the user extra information about the inner workings of the barcode's state.
 * Note: Currently only enabled with QR Codes.
 * @memberof module:barcode-js
 * 
 * @typedef ModeTransition
 * @type {object}
 * @property {number} ModeTransition.index - The index in the result value where the mode transition occurs.  
 * @property {number} ModeTransition.type - The transition type. See <a href=#.module.exports.ModeTransitionType>ModeTransitionType</a> for a list of allowed types.<br/>
 */


/**
 * A rectangular area, in pixels, within the image.
 * @memberof module:barcode-js
 * 
 * @typedef rectangle
 * @type {object}
 * @property {number} rectangle.x - The x coordinate of the area
 * @property {number} rectangle.y - The y coordinate of the area
 * @property {number} rectangle.width - The width of area
 * @property {number} rectangle.height - The height of area
 */


/**
 * Input parameters used by the <a href="#.module.exports.analyze">analyze</a> method.
 * @memberof module:barcode-js
 * 
 * @typedef params
 * @type {object}
 * @property {string|array} [params.type=BarcodeType.ALL_1D] - A single string with the barcode type to find 
 *                                           or an array of strings with the barcode types to  find. <br/>
 *                                           See <a href=#.module.exports.BarcodeType>BarcodeType</a> for a list of allowed types.<br/>
 *                                           <strong>Default:</strong> Find all 1D barcode types.
 * @property {object} [params.area={x:0,y:0:width:0,height:0}] - The <a href="#.rectangle">rectangluar</a> area of the image, in pixels,
 *                                          to search for barcodes.<br/> 
 *                                          <strong>Default:</strong> Entire image.
 * @property {boolean} [parameters.additionalReadingPass=false] - Specifies whether an additional processing pass will be performed on a scaled (reduced) version of the original image (scale factor equal to 0.5).
 *                                          After analyzing both these images, results from the pass that yields a higher confidence value would be reported. This step is strictly an extra analysis step which increases response time.
 *                                          It can be used for barcode images with repetitive noise artifacts around the bars which cause normal recognition pass to misread.<br/>
 *                                          <strong>Default:</strong> No additional reading pass.
 * @property {boolean} [params.code39StartStopPatternsAreMandatory=true] - Specifies whether or not Barcode Xpress will find and decode Code 39 / Code 39 Extended barcodes when their start and stop patterns are missing.
 *                                          If set to true, only regular (barcode has both start and stop patterns) barcodes are recognized.
 *                                          This is relevant for Code39 and Code39 Extended barcode symbologies.<br/>
 *                                          <strong>Default:</strong> Decode only barcodes with start and stop patterns.
 * @property {boolean} [params.royalMailVariableLengthDecoding=false] - Specifies whether or not to decode Royal Mail barcodes of any length.
 *                                          If set to false, only Royal Mail barcodes matching the lengths in the RM4SCC specification will be decoded.<br/>
 *                                          <strong>Default:</strong> No variable length decoding.
 * 
 * @example <caption>Setting barcode type as a single string.</caption>
 * 
 * const bx = require('barcode-js');
 * const params = {
 *   type : bx.BarcodeType.DATAMATRIX
 * }
 * 
 * @example <caption>Setting barcode type as an array of string.</caption>
 * const bx = require('barcode-js');
 * const params = {
 *   type : [bx.BarcodeType.CODE128, bx.BarcodeType.PDF417]
 * }
 * 
 * @example <caption>Limiting search area in the image.</caption>
 * const bx = require('barcode-js');
 * const params = {
 *   area : { x: 10, y: 10, width: 200, height: 100}
 * }
 * 
 * @example <caption>All barcode types and search entire image.</caption>
 * const bx = require('barcode-js');
 * const params = {
 *   type : bx.BarcodeType.ALL,
 *   area : { x: 0, y: 0, width: 0, height: 0}
 * }
 */

/**
 * A 2D point,in pixels, within an image.
 * @memberof module:barcode-js
 * 
 * @typedef point
 * @type {object}
 * @property {number} x -The x coordinate of the point
 * @property {number} y - The y cooridnate of the point
 */


/**
 * The result object contains information about a found barcode.
 * <p/>
 * <p><strong>Remarks</strong></p>
 * The <a href="#.module.exports.analyze">analyze</a> method produces an array of result objects. 
 * Each element of the results array contains the information of a single recognized barcode.
 * Since BarcodeXpress can return multiple barcode results from a single scan, the detected barcode results
 * are sorted using the following criteria.<br/>
 * <li>The confidence factor is used to sort the barcode results from the highest confidence to the lowest confidence.</li>
 * <li>For any barcodes with the same confidence value, they are sorted by their location, from top to bottom, then left to right.</li>
 * <strong>Note:</strong> All solved barcodes are ordered before unsolved barcodes.<br/>
 * 
 * @memberof module:barcode-js
 * 
 * @typedef result
 * @type {object}
 * @property {area} area - The bounding <a href=#.rectangle>rectangle</a> of the recognized barcode.
 * @property {number} checksumLength -  The number of characters in the recognized checksum.
 * @property {boolean} checksumValid -  Indicates whether the checksum for a recognized barcode is valid.
 * @property {number} confidence - The confidence of the recognized barcode.
 * @property {array} corners - Array of <a href=#.point>points</a> These are the four corners of the found barcode.
 * @property {ResultInfo2d} info2d - The <a href=#.ResultInfo2d>ResultInfo2d</a> information for the barcode.
 * @property {ModeTransition} modeTransitions - Array of <a href=#.ModeTransition>ModeTransitions</a> the reader goes through while decoding the barcode.
 * @property {string} name - The name of the recognized barcode.
 * @property {number} skew - The angle of skew for the recognized barcode analyzed.
 * @property {string} type - The type of the recognized barcode.
 * @property {string} value - The text value of the recognized barcode.
 * @property {Buffer} valueRaw - The raw value of the recognized barcode.
 * 
 * @example <caption>Log results to console.</caption>
 * function logResults(results) {
 *    results.forEach(function (result) {
 *        console.log('Result: ');
 *        console.log('\n\t type: ' + result.type);
 *        console.log('\n\t value: ' + result.value);
 *        console.log('\n\t confidence: ' +  result.confidence);
 *        console.log('\n\t area: ' +  JSON.stringify(result.area));
 *        console.log('\n\t corners: ' +  JSON.stringify(result.corners));
 *        console.log('\n');
 *    });
 * }
 */

/**
 * Optional Callback function used by analyze.
 * @memberof module:barcode-js
 * 
 * @callback analyzeCallback
 * @param {object} error - <strong>undefined</strong> if no error is encounted.
 * @param {object} results - Array of <a href="#.result">result</a>, or undefined if an error was encountered.
 */

/**
 * Detects barcodes on the given bitmap image. 
 * 
 *
 * @method
 * @memberof module:barcode-js
 * 
 * @param {string|Buffer|stream.Readable|jimp.image|object|Promise} input - Input image to be anaylzed. <br/>
 *                                     The input can be one of the following types: <br/>
 *                                     <li>string - A path to a file or URL.</li>
 *                                     <li>Buffer - A buffer containing image bytes from a supported image format.</li> 
 *                                     <li>stream.Readable - A readable stream. Image data will be read entirely into a Buffer before processing.</li>
 *                                     <li>jimp.image - A jimp image.</li>
 *                                     <li>object - An object with a required <i>url</i> member and optional http.request options (jimp style).</li>
 *                                     <br/>or a Promise that returns one of the above types.
 * @param {object} [params] - <a href="#.params">Parameters</a> used by the analyze method.
 * @param {function} [callback] - Use <a href="#.analyzeCallback">callback</a> function, if defined, otherwise return a Promise.
 * @returns {Promise|undefined} Returns a Promise if callback is not a function. <br/>
 *                              The Promise will return an array of <a href="#.result">result</a>.

 * @example <caption>Call using async/await</caption>
 * const bx = require('barcode-js');
 * 
 * const analyzeBarcodes = async (input, params) => {
 *     try {
 *       const results = await bx.analyze(input, params);
 *       console.log('Results:' + JSON.stringify(results));
 *   }
 *   catch(err) {
 *       console.error(`Fatal: Error analyzing image input\n${err}`);
 *   }
 * };
 * 
 * // Set up parameters.
 * const filePath = 'test.bmp';
 * const params = {type: bx.BarcodeType.ALL};
 * 
 * // Call analyze.
 * analyzeBarcodes(filePath, params);
 * 
 * @example <caption>Call using promises</caption>
 * const bx = require('barcode-js');
 * 
 * // Set up parameters.
 * const filePath = 'test.bmp';
 * const params = {type: bx.BarcodeType.ALL};
 * 
 * // Call analyze.
 * bx.analyze(filePath, params)
 *    .then(results => {
 *        console.log('Results:' + JSON.stringify(results));
 *   })
 *   .catch(error => {
 *       console.log('Error:' + JSON.stringify(error));
 *   });
 * 
 * @example <caption>Call using callback function</caption>
 * const bx = require('barcode-js');
 * 
 * // Set up parameters.
 * const filePath = 'test.bmp';
 * const params = {type: bx.BarcodeType.ALL};
 * 
 * // Call analyze.
 * bx.analyze(filePath, params, function (err, results) {
 *    if (err) {
 *        console.error(`Fatal: Error analyzing image input\n${err}`);
 *        return;
 *    }
 *    console.log('Callback Results: ' + JSON.stringify(results));
 * }); 
 * 
 * @example <caption>Call with a jimp.image</caption>
 * 
 * const bx = require('barcode-js');
 * const jimp = require('jimp');
 * 
 * const analyzeBarcodes = async (filePath, params) => {
 *     try {
 *       const image = await jimp.read(filePath);
 *       const results = await bx.analyze(image, params);
 *       console.log('Results:' + JSON.stringify(results));
 *   }
 *   catch(err) {
 *       console.error(`Fatal: Error analyzing image input\n${err}`);
 *   }
 * };
 * 
 * // Set up parameters.
 * const filePath = 'test.bmp';
 * const params = {type: bx.BarcodeType.ALL};
 * 
 * analyzeBarcodes(filePath, params);
 *
 *  @example <caption>Call with promise that returns a jimp.image</caption>
 * 
 * const bx = require('barcode-js');
 * const jimp = require('jimp');
 * 
 * const analyzeBarcodes = async (inputPromise, params) => {
 *     try {
 *       const results = await bx.analyze(inputPromise, params);
 *       console.log('Results:' + JSON.stringify(results));
 *   }
 *   catch(err) {
 *       console.error(`Fatal: Error analyzing image input\n${err}`);
 *   }
 * };
 * 
 * // Set up parameters.
 * const filePath = 'test.bmp';
 * const params = {type: bx.BarcodeType.ALL};
 * const imagePromise = jimp.read(filePath);
 * 
 * analyzeBarcodes(imagePromise, params);
 * 
 * @example <caption>Call with image in a buffer</caption>
 * const bx = require('barcode-js');
 * const fs = require('fs');
 * 
 * const analyzeBarcodes = async (input, params) => {
 *     try {
 *       const results = await bx.analyze(input, params);
 *       console.log('Results:' + JSON.stringify(results));
 *   }
 *   catch(err) {
 *       console.error(`Fatal: Error analyzing image input\n${err}`);
 *   }
 * };
 * 
 * // Set up parameters.
 * const filePath = 'test.bmp';
 * const params = {type: bx.BarcodeType.ALL};
 * const imageBuffer = fs.readFileSync(filePath);
 * 
 * analyzeBarcodes(imageBuffer, params);
 */
module.exports.analyze = (input, params, callback) => {
    const isPromise = typeof callback !== 'function';
    const retError = isPromise ? Promise.reject : callback;

    params = params || {};
    if (typeof params !== 'object') {
        return retError(new Error(`Invalid type '${typeof params}' for parameter 'params'; should be 'object'`));
    }

    const lic = { oemLicenseKey: licensing.getOemLicenseKey(), solutionKey: licensing.getSolutionKey(), solutionName: licensing.getSolutionName() };

    const promise = analyze(input, params, lic);

    if (isPromise === true) {
        return promise;
    }

    promise.then(
        value => process.nextTick(callback, undefined, value),
        error => process.nextTick(callback, error, undefined)
    );
}
