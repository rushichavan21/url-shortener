import { useNavigate, useRouterState } from '@tanstack/react-router';
import './navbar.css';
import React, { useContext } from "react";
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const navigate = useNavigate();
  


  const pathname = useRouterState({ select: state => state.location.pathname });

  const { dispatch , user} = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate({ to: '/' });
  };

  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-brand">
            <span className="logo-url"><img src="/logo-url.svg" alt="Logo" /></span>
            <span className="brand-text">Url Shortner</span>
          </div>
          <div className="navbar-links">
            <a href="https://github.com/rushichavan21/url-shortener">Contact Us</a>
            <a href="https://www.youtube.com/@thisisrushi">Learn how this works?</a>
          </div>
        </div>

        <div className="navbar-right">
          {!isDashboard ? (
            <>
              <button className="btn signup-btn" onClick={() => navigate({ to: '/auth/login' })}>Log in</button>
              <button className="btn login-btn" onClick={() => navigate({ to: '/auth/signup' })}>Sign up</button>
            </>
          ) : (
            <span>
              <span className='btn navbar-email'>{user?.email}</span>
              <button className="btn login-btn" onClick={handleLogout}>Logout</button>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
