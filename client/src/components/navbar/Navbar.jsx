import './navbar.css';
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-brand">
            
            <span className="logo-url"><img src="./logo-url.svg" alt="" /></span>
            <span className="brand-text">Url Shortner</span>
          </div>
          <div className="navbar-links">
            <a href="#">contact us</a>
            <a href="#">Learn</a>
            <a href="#">Learn how this works?</a> 
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
