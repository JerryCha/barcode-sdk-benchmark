import React from 'react';
import './App.css';

import Box from './Box';

import Dbr from './Dbr';
import ZXing from './ZXing';

function App() {
  const testImg = 'http://localhost:3000/114514.png'
  return (
    <div className="App">
      <header className="App-header">
        <h1>Barcode SDK Benchmarking</h1>
        <p>For internal use only</p>
        <p>Each SDK would be tested with a <a href={testImg} target="_blank">sample image</a> for 100 times.</p>
      </header>
      <main>
        <div id="instance-wrap">
          <Box>
            <Dbr 
              productKeys="t0076xQAAAAcFqMcZtCGB5D8vRTBXad8V2NKTE1zGUqtblrPsHlabRNIjl4TJKnCzvlxXMuZJFyFRJ853pRcbQcUgDexIgHm1DMIfaDAqcg==" 
              engineResourcePath="/dbr-resources"
              testSource={testImg}
            />
          </Box>
          <Box>
            <ZXing testSource={testImg}/>
          </Box>
        </div>
      </main>
    </div>
  );
}

export default App;
