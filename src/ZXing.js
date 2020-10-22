import React from 'react'

import { BrowserMultiFormatReader, BarcodeFormat, DecodeHintType, RGBLuminanceSource, HybridBinarizer, BinaryBitmap } from '@zxing/library'

class ZXing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      processTime: null
    }

    this.benchmark = this.benchmark.bind(this)

    const reader = new BrowserMultiFormatReader()
    this.reader = reader
  }

  async benchmark() {
    this.setState({ processTime: 'Running...' })
    const reader = this.reader
    const hints = new Map()
    const formats = [
      // BarcodeFormat.QR_CODE, 
      BarcodeFormat.CODE_128, 
      // BarcodeFormat.CODE_39
    ]
    hints.set(DecodeHintType.POSSIBLE_FORMATS, formats)

    reader.hints = hints

    // console.log(hints)
    // Get the test image
    const imgElement = document.getElementById('test-img')
    const cvs = new OffscreenCanvas(imgElement.width, imgElement.height)
    const ctx = cvs.getContext('2d')
    ctx.drawImage(imgElement, 0, 0)
    const data = ctx.getImageData(0, 0, cvs.width, cvs.height)

    const src = new RGBLuminanceSource(data.data, data.width, data.height)
    const binaryBitmap = new BinaryBitmap(new HybridBinarizer(src))

    const startTime = Date.now()
    // console.log(reader)
    for (let i = 0; i < 100; i++) {
      // let result = await reader.decodeFromImageUrl('http://localhost:3000/test.png')
      try {
        // let result = await reader.decodeBitmap(binaryBitmap, hints)
        let result = await reader.decodeFromImageUrl(this.props.testSource)
        // console.log(result)
      } catch (err) {
        console.error(err)
      }
    }
    const endTime = Date.now()

    this.setState({
      processTime: endTime-startTime
    })
  }

  render() {
    const processTime = this.state.processTime
    let resultText
    if (processTime === null)
      resultText = 'Not Run'
    else if (processTime === 'Running...')
      resultText = processTime
    else
      resultText = (processTime/1000) + ' seconds'

    return (
      <div id="zxing">
        <h2>ZXing JavaScript Port</h2>
        <p>Version: 0.18.2</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
        <img src="/test.png" style={{display: 'none'}} id="test-img" />
        <div style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
          Note that ZXing JavaScript could not decode multiple code at the same time. 
          It would decode the first matched code and return its result.
        </div>
      </div>
    )
  }
}

export default ZXing;