import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../App.css';

function Calculator() {
  const [state, setState] = useState({
    next: null,
    operation: null,
    total: null,
  });

  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };
  const { next, operation, total } = state;
  return (

    <div className="container">
      <h2 className="headingcalc">Lets do some Math!</h2>
      <div className="calscreen">{ next || operation || total || 0 }</div>
      <div className="calcbtns">
        <div className="rows">
          <button type="button" onClick={clickHandler} className="calc-btn grey">AC</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">+/-</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">%</button>
          <button type="button" onClick={clickHandler} className="calc-btn orangebtn symbols">÷</button>
        </div>
        <div className="rows">
          <button type="button" onClick={clickHandler} className="calc-btn grey">7</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">8</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">9</button>
          <button type="button" onClick={clickHandler} className="calc-btn orangebtn symbols">x</button>
        </div>
        <div className="rows">
          <button type="button" onClick={clickHandler} className="calc-btn grey">4</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">5</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">6</button>
          <button type="button" onClick={clickHandler} className="calc-btn orangebtn symbols">-</button>
        </div>
        <div className="rows">
          <button type="button" onClick={clickHandler} className="calc-btn grey">1</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">2</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey">3</button>
          <button type="button" onClick={clickHandler} className="calc-btn orangebtn symbols">+</button>
        </div>
        <div className="rows">
          <button type="button" onClick={clickHandler} className="calc-btn grey zero">0</button>
          <button type="button" onClick={clickHandler} className="calc-btn grey dot">.</button>
          <button type="button" onClick={clickHandler} className="calc-btn orangebtn symbols">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
