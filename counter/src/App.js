import React, { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);


  const onCliclPlus = () => {
    setCount((prev) => prev + 1)

  }
  const onCliclMinus = () => {
    setCount((prev) => prev - 1)
  }

  const onCliclReset = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <div>
        <h3>Счетчик:</h3>
        <h2 className={count === 0 ? 'reset' : count > 0 ? 'plus' : 'minus'}>
          {count}
        </h2>
        <button onClick={onCliclMinus} className="minus">- Минус</button>
        <button onClick={onCliclReset} style={{ fontSize: '15px', padding: '5px' }} className="reset">Обнулить</button>
        <button onClick={onCliclPlus} className="plus">Плюс +</button>
      </div>

    </div>
  );
}

export default App;