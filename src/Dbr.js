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
      processTime: null,
      results: []
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
    this.setState({ results: results })
  }

  render() {
    const processTime = this.state.processTime
    let resultIndicator;
    const results = this.state.results
    let resultsDisplay = ''
    if (processTime === null)
      resultIndicator = 'Not Run'
    else if (processTime === 'Running...')
      resultIndicator = processTime
    else
      resultIndicator = (processTime/1000) + ' seconds'
    if (processTime) {
      resultsDisplay = <p>{results.length} codes found.</p>
    }

    return (
      <div className="instance" id="dbr">
        <h2>Dynamic Barcode Reader</h2>
        <p>Version: 7.6.0</p>
        <p style={{fontSize: '24px'}} >{resultIndicator}</p>
        {resultsDisplay}
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
      </div>
    )
  }
}

export default Dbr;