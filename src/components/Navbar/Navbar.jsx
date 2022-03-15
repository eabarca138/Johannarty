import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="nav">
        <h1>
          <Link className="navbar-brand" to="/">
            <span>J</span>Johann Arty
          </Link>
        </h1>
        <input className="list-btn" type="checkbox" id="list-btn" />
        <label className="list-icon" htmlFor="list-btn">
          <span className="navicon"></span>
        </label>
        <ul className="navbar-list">
          <li>
            <Link className='navbar-item' to="./SocialMedia">Social Media</Link>
          </li>
          <li>
            <Link className='navbar-item' to="/Profile">Profile</Link>
          </li>
          <li>
            <Link className='navbar-item' to="/Contact">Contact</Link>
          </li>
          <li>
            <Link className='navbar-item' to="Dates">Dates</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar