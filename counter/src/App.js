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

  return (
    <div className="App">
      <div>
        <h3>Счетчик:</h3>
        <h2>{count}</h2>
        <button onClick={onCliclMinus} className="minus">- Минус</button>
        <button onClick={onCliclPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;