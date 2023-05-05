import Calculator from './Components/Calculator';
import Quote from './Components/quote';
import Nav from './Components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="quote-wrapper">
        <Quote />
      </div>
      <div className="calculator-wrapper">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
