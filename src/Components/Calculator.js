import './Calculator.css';

function Calculator() {
  return (
    <div className="container">
      <div className="calscreen">0</div>
      <div className="calcbtns">
        <div className="rows">
          <div className="calc-btn grey">AC</div>
          <div className="calc-btn grey">+/-</div>
          <div className="calc-btn grey">%</div>
          <div className="calc-btn orangebtn symbols">÷</div>
        </div>
        <div className="rows">
          <div className="calc-btn grey">7</div>
          <div className="calc-btn grey">8</div>
          <div className="calc-btn grey">9</div>
          <div className="calc-btn orangebtn symbols">x</div>
        </div>
        <div className="rows">
          <div className="calc-btn grey">4</div>
          <div className="calc-btn grey">5</div>
          <div className="calc-btn grey">6</div>
          <div className="calc-btn orangebtn symbols">-</div>
        </div>
        <div className="rows">
          <div className="calc-btn grey">1</div>
          <div className="calc-btn grey">2</div>
          <div className="calc-btn grey">3</div>
          <div className="calc-btn orangebtn symbols">+</div>
        </div>
        <div className="rows">
          <div className="calc-btn grey zero">0</div>
          <div className="calc-btn grey dot">.</div>
          <div className="calc-btn orangebtn symbols">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
