import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 href="/" className="navBrand">
        <span>J</span>Johann Arty
      </h1>
      <input className="list-btn" type="checkbox" id="list-btn" />
      <label className="list-icon" htmlFor="list-btn">
        <span className="navicon"></span>
      </label>
      <ul className="navbar-list">
        <li>Social Media</li>
        <li>Profile</li>
        <li>Contact</li>
        <li>Dates</li>
      </ul>
    </nav>
  );
}

export default Navbar