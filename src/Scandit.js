import React from 'react'

import * as ScanditSDK from 'scandit-sdk'
import { ImageSettings } from 'scandit-sdk'

class Scandit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processTime: null
    }

    this.benchmark = this.benchmark.bind(this)
  }
  
  componentDidMount() {
    this.init()
  }

  async init() {
    // Configure environment
    ScanditSDK.configure(this.props.productKeys, {
      engineLocation: '/scandit-resources/'
    })
    const CodeFormat = ScanditSDK.Barcode.Symbology
    // Specify settings
    const scanSettings = await new ScanditSDK.ScanSettings({
      enabledSymbologies: ["qr", "ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf"],
      codeDuplicateFilter: 1000 // following the example setting
    })
    console.log(scanSettings)
    this.scanner = new ScanditSDK.Scanner(scanSettings)
  }

  async benchmark() {
    const imgElement = document.getElementById('scandit-img')
    let scanner = this.scanner

    const cvs = new OffscreenCanvas(imgElement.width, imgElement.height)
    const ctx = cvs.getContext('2d')
    ctx.drawImage(imgElement, cvs.width, cvs.height)
    const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height)
    console.log(imgData)

    let count = 0
    for (let i = 0; i < imgData.width*imgData.height*4; i++)
      if (imgData.data[i] === 0)
        count++
    console.log(count)

    const imageSettings = {
      width: imgElement.width,
      height: imgElement.height,
      format: ImageSettings.Format.RGBA_8U
    }
    console.log(imageSettings)
    scanner = await scanner.applyImageSettings(imageSettings)
    
    this.setState({ processTime: 'Running...' })
    const startTime = Date.now()
    let results = await scanner.processImage(imgElement, true)
    const endTime = Date.now()
    console.log('======== scandit sdk ========')
    console.log(results)
    console.log('=============================')
    this.setState({ processTime: endTime-startTime })
    console.log(scanner)
  }

  render () {
    const processTime = this.state.processTime
    let resultText;
    if (processTime === null)
      resultText = 'Not Run'
    else if (processTime === 'Running...')
      resultText = processTime
    else
      resultText = (processTime/1000) + ' seconds'
    return (
      <div className="instance" id="dbr">
        <h2>Scandit Barcode SDK</h2>
        <p>Version: 5.3.1</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
        <img id="scandit-img" src={this.props.testSource} style={{ display: 'none' }} />
      </div>
    )
  }
}

export default Scandit