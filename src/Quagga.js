import React from 'react';

import quagga from 'quagga'

class Quagga extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processTime: null
    }
    this.benchmark = this.benchmark.bind(this)
    this.decodeCounter = 0
  }

  async benchmark() {
    this.setState({ processTime: 'Running...' })

    const startTime = Date.now()
    quagga.decodeSingle({
      inputStream: {
        width: 1600,
        singleChannel: false
      },
      locator: {
        patchSize: 'medium',
        halfSample: false
      },
      decoder: {
        multi: true,
        readers: [
          'code_128_reader', 'code_39_reader', 'codabar_reader', 
          'code_93_reader', 'code_39_vin_reader', 'upc_reader',
          'upc_e_reader', 'i2of5_reader', '2of5_reader'
        ]
      },
      locate: true,
      src: this.props.testSource
    }, (result) => { 
      const endTime = Date.now()
      this.setState({ processTime: endTime-startTime })
      console.log(result) 
    })
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
        <h2>Quagga.js</h2>
        <p>Version: 0.12.1</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
        <div style={{fontStyle: 'italic', marginTop: '0.5rem'}}>
          * Quagga.js does not support any 2D code format.
        </div>
      </div>
    )
  }
}

export default Quagga