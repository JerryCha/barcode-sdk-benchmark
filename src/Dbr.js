import React from 'react'
import dbr from 'dynamsoft-javascript-barcode'

class Dbr extends React.Component {
  constructor(props) {
    super(props)

    const license = this.props.productKeys
    const enginePath = this.props.engineResourcePath

    dbr.BarcodeReader.productKeys = license
    dbr.BarcodeReader.engineResourcePath = enginePath
    
    this.state = {
      processTime: null
    }

    this.benchmark = this.benchmark.bind(this)
  }

  async componentDidMount() {
    await dbr.BarcodeReader.loadWasm()

    this.reader = await dbr.BarcodeReader.createInstance()
    this.scanner = await dbr.BarcodeScanner.createInstance()
  }

  async benchmark() {
    this.setState({ processTime: 'Running...' })
    
    const reader = this.reader

    const startTime = Date.now()
    let results
    for (let i = 0; i < 1; i++) {
      results = await reader.decode(this.props.testSource)
    }
    const endTime = Date.now()
    console.log('========dynamic barcode reader========')
    console.log(results)
    console.log('======================================')
    this.setState({ processTime: endTime-startTime })
  }

  render() {
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
        <h2>Dynamic Barcode Reader</h2>
        <p>Version: 7.6.0</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
      </div>
    )
  }
}

export default Dbr;