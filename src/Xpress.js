import React from 'react'

class BarcodeXpress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processTime: null
    }
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
      <div>
        <h2>Barcode Xpress</h2>
        <p>Version: 5.3.1</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
      </div>
    )
  }
}

export default BarcodeXpress;