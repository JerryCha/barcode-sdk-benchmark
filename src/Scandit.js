import React from 'react'

import * as ScanditSDK from 'scandit-sdk'
import { ImageSettings } from 'scandit-sdk'

class Scandit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processTime: null,
      results: []
    }

    this.benchmark = this.benchmark.bind(this)
  }
  
  componentDidMount() {
    this.init()
  }

  async init() {
    // Configure environment
    await ScanditSDK.configure(this.props.productKeys, {
      engineLocation: '/scandit-resources/',
      preloadEngine: true
    })
    // Specify settings
    const scanSettings = await new ScanditSDK.ScanSettings({
      enabledSymbologies: [
        "qr", "ean8", "ean13", "upca", 
        "upce", "code128", "code39", 
        "code93", "itf"
      ],
      codeDuplicateFilter: 1000, // following the example setting
      
    })
    const picker = await ScanditSDK.BarcodePicker.create(document.createElement('div'), {
      accessCamera: false,
      visible: false,
      singleImageModeSettings: {
        desktop: { usageStrategy: ScanditSDK.SingleImageModeSettings.UsageStrategy.ALWAYS }
      }
    })
    await picker.applyScanSettings(scanSettings)
    this.scanner = picker.getScanner()
  }

  async benchmark() {

    const imgElement = new Image()
    imgElement.src = this.props.testSource

    const scanner = this.scanner
    
    imgElement.onload = async () => {
      const imageSettings = {
        width: imgElement.width,
        height: imgElement.height,
        format: ImageSettings.Format.RGBA_8U
      }
      scanner.applyImageSettings(imageSettings)
      
      this.setState({ processTime: 'Running...' })
      const startTime = Date.now()
      let results = await scanner.processImage(imgElement, true)
      const endTime = Date.now()
      console.log('======== scandit sdk ========')
      console.log(results)
      console.log('=============================')
      this.setState({
        processTime: endTime-startTime, 
        results: results.barcodes
      })
      console.log(scanner)
    }
    
  }

  render () {
    const processTime = this.state.processTime
    let resultText;
    const results = this.state.results
    let resultsDisplay = ''
    if (processTime === null)
      resultText = 'Not Run'
    else if (processTime === 'Running...')
      resultText = processTime
    else
      resultText = (processTime/1000) + ' seconds'
    if (processTime) {
      resultsDisplay = <p>{results.length} codes found.</p>
    }

    return (
      <div className="instance" id="scandit">
        <h2>Scandit Barcode SDK</h2>
        <p>Version: 5.3.1</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        {resultsDisplay}
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
      </div>
    )
  }
}

export default Scandit