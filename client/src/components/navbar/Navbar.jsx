import './navbar.css';
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-brand">
            <span className="brand-text">Url Shortner</span>
          </div>
          <div className="navbar-links">
            <a href="#">Community</a>
            <a href="#">Teams</a>
            <a href="#">Learn</a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="btn login-btn">Log in</button>
          <button className="btn signup-btn">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
