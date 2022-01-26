import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Ripples from 'react-ripples';

function App() {
  const neutralStyle = { color: 'white' }
  const positiveStyle = { color: 'green' }
  const negativeStyle = { color: 'red' }
  const [currentCount, SetCurrentCount] = React.useState(0);
  const [textStyle, SetTextStyle] = React.useState(neutralStyle);
  const duration_s = 1000;
  useEffect(() => {
    if (currentCount === 0) SetTextStyle(neutralStyle);
    else if (currentCount > 0) SetTextStyle(positiveStyle);
    else SetTextStyle(negativeStyle);
  }, [currentCount]);
  return (
    <div className="App">
      <h1 style={{ position: 'absolute', color:'#FFFFFF' }}>React Counter</h1>
      <div className="Container">
        <div>
          <h1 style={textStyle}>{currentCount}</h1>
        </div>
        <div className="ButtonsView">
          <div className='btnContainer'>
            <Ripples color={'#FFFFFF90'} during={duration_s}>
              <button type="button" className='decrementBtn' onClick={() => SetCurrentCount(currentCount - 1)}>-</button>
            </Ripples>
          </div>
          <div className='btnContainer'>
            <Ripples color='#FFFFFF90' during={duration_s}>
              <button className='resetBtn' onClick={() => SetCurrentCount(0)}>Reset</button>
            </Ripples>
          </div>
          <div className='btnContainer'>
            <Ripples color='#FFFFFF90' during={duration_s}>
              <button className='incrementBtn' onClick={() => SetCurrentCount(currentCount + 1)}>+</button>
            </Ripples>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
