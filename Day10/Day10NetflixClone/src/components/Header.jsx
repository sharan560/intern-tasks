import React, { useState } from 'react';
import { Link } from 'react-router-dom';// Assuming you're creating a separate CSS file

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src="/netflix.webp" alt="Netflix Logo" className="logo" />
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-list">My List</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
      </div>
    </header>
  );
}

export default Header;
