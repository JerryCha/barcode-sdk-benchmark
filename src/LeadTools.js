import React from 'react'

const Document = window.lt.Document

class LeadTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      processTime: null
    }
  }

  async componentDidMount() {
    await this.initLtService()
  }

  initLtService() {
    return new Promise((res, rej) => {
      Document.DocumentFactory.serviceHost = 'http://localhost:40000'
      Document.DocumentFactory.serviceHostPath = ''
      Document.DocumentFactory.serviceApiPath = 'api'

      Document.DocumentFactory.verifyService()
        .done((serviceData) => {
          console.log(serviceData)
          res(true)
        })
        .fail((jqXHR, statusText, errorThrown) => {
          alert("Error returned from service. See the console for details.") 
          var serviceError = Document.ServiceError.parseError(jqXHR, statusText, errorThrown); 
          console.error(serviceError);
        })
    })    
  }

  initLtDocument() {

    const url = this.props.testSource
    const loadDocumentOptions = new Document.LoadDocumentOptions()

    Document.DocumentFactory.loadFromUri(url, loadDocumentOptions)
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
        <h2>LeadTools Barcode</h2>
        <p>Version: ???</p>
        <p style={{fontSize: '24px'}} >{resultText}</p>
        <button className="btn-primary" onClick={this.benchmark}>Run</button>
      </div>
    )
  }
}

export default LeadTools