import './Navbar.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

  const [checked, setChecked] = useState(false);

  return (
    <nav className="nav">
      <h1>
        <Link onClick={() => {setChecked(false)}}  className="navbar-brand" to="/">
          <span>J</span>Johann Arty
        </Link>
      </h1>
      <input readOnly  checked={checked} className="list-btn" type="checkbox" id="list-btn" />
      <label onClick={() => {setChecked(old => !old)}} className="list-icon" htmlFor="list-btn">
        <span className="navicon"></span>
      </label>
      <ul className="navbar-list">
        <Link onClick={() => {setChecked(old => !old)}} className="navbar-item" to="./SocialMedia">
          <li>Social Media</li>
        </Link>
        <Link onClick={() => {setChecked(old => !old)}} className="navbar-item" to="/Profile">
          <li>Profile</li>
        </Link>
        <Link onClick={() => {setChecked(old => !old)}} className="navbar-item" to="/Contact">
          <li>Contact</li>
        </Link>
        <Link onClick={() => {setChecked(old => !old)}} className="navbar-item" to="Dates">
          <li>Dates</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar