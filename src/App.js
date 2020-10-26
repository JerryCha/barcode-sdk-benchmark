import React from 'react';
import './App.css';

import Box from './Box';

import Dbr from './Dbr';
import ZXing from './ZXing';
import Quagga from './Quagga';
import LeadTools from './LeadTools';
import Scandit from './Scandit';
import BarcodeXpress from './Xpress';

function App() {
  const testImg = 'http://localhost:3000/test.png'
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
            <ZXing testSource={testImg} />
          </Box>
          <Box>
            <Quagga testSource={testImg} />
          </Box>
          {/* <Box>
            <LeadTools testSource={testImg} />
          </Box> */}
          <Box>
            <Scandit 
              testSource={testImg} 
              productKeys="Ab7PAyi0N0GBDrF5tRsux2whXHRbJRuqoGYM2+JvD06ZTQmecFEh6KoCCTbWc3Uh32ZXDE1AGTVHWIt0cST7KaZcoCbMf3Fx2XOIELlcZnRPW5+nXwM/MBAuwHtADEA5/SH1lrEAVXS7MYIn+3EqhRfLcH3ynVktXTAcQPEYjXf5KuojcoN25SuQKBIXk/7kX2VfoZ+rfNynxGOqihRkcvl2xBdtKoeAb+qi3xIQ+w/W8xV7D4gosQwbVuVFFcLmLXORiPMnhzSRvL8qwCPEhp+d/qpUeiTQbyI+eO26TiyvOUq6iA50Ps2DyTz5LrWRO8FGPRFR9X9oIIhTAASmUzJdMg4bBTph4d6dRMNMvazNnx0yTz6SILGW2cgCkfQJAIMdfwhvthwqcFn2Jb+5qd4o/UkaAraPe+ebJE9MBvaWNnV2hghteqg6OK4YvtGuLLyGHThhlT0AdD09msVKRboroSE/sC+Y9YbSUJ61FMcdY+7xuKwHuaSSl2wuwAc60A44yojWYv/l6a3TqcJ9WZDW4NR7wwtz2LZa+O9BAcp2dX2cCejxfnkv1G/nbzwsorXGHP4lJvjlvT97umuD3BsWYcuL5OPXfl5oGVjIBqGUk1XJGi99m0f3QWU3H4YGvnCUeLX35q9evFc9XY2HYLH1ryjQ++fZ2qgSO9s9gERfHrPru6howF4UU+5mlbRy5xKeSbbxs5Rp+zaixNszV3toG97+vBs11mdDD5CGetLQToBLe+/jlMF4BzwSzAW827WFvPPXuF9wC8kW+ij1hHjxBl9vsoEE0ptBS1nMQxcLJQ=="
            />
          </Box>
          <Box>
            <BarcodeXpress testSource={testImg} />
          </Box>
        </div>
      </main>
    </div>
  );
}

export default App;
