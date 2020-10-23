import React from 'react'

import * as ScanditSDK from 'scandit-sdk'

class Scandit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processTime: null
    }

    this.benchmark = this.benchmark.bind(this)
  }

  init() {
    ScanditSDK.configure('114514', {
      engineLocation: '/'
    })
  }

  async benchmark() {

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
        <p>Version: ???</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
      </div>
    )
  }
}

export default Scandit