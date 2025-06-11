import React from 'react';
import './options.css';
import { useNavigate } from '@tanstack/react-router';

const Options = () => {
  const navigate = useNavigate();

  return (
    <div className="options-container">
      <h1 className="options-title">What would you like to do?</h1>
      <div className="options-blocks">
        <div className="options-block" onClick={() => navigate({ to: '/custom-url' })}>
          <h2>Create a Custom URL</h2>
          <p>Pick your own short code for the link.</p>
        </div>
        <div className="options-block" onClick={() => navigate({ to: '/random-url' })}>
          <h2>Create URL with Random Code</h2>
          <p>We'll generate a unique short code for you.</p>
        </div>
        <div className="options-block" onClick={() => navigate({ to: '/my-urls' })}>
          <h2>View Your URLs</h2>
          <p>Manage and track your previously shortened URLs.</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
