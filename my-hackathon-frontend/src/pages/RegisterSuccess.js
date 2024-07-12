import React from 'react';
import '../RegisterSuccess.css';
import logo from '../logo.svg';

const Confirmation = () => {
  return (
    <div className="container">
      <header className="register-header">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
      </header>
      <div className="confirmation-container">
        <h1>Thank you!</h1>
        <p>We received your registration form. We will inform you when Hackathon will start.</p>
        <button onClick={() => window.location.href='/'}>Go back to hackathon page</button>
      </div>
    </div>
  );
};

export default Confirmation;
