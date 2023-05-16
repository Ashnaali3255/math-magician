import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './Components/Calculator';
import Quote from './Components/quote';
import Nav from './Components/nav';
import Home from './Components/home';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
