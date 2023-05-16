import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navBar">
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quotes">Quotes</Link></li>
    </ul>

  </nav>
);

export default Nav;
