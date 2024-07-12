import React from 'react';
import '../RegisterSuccess.css';

const Confirmation = () => {
  return (
    <div className="container">
      <div className="confirmation-container">
        <h1>Thank you!</h1>
        <p>We received your registration form. We will inform you when Hackathon will start.</p>
        <button onClick={() => window.location.href='/'}>Go back to hackathon page</button>
      </div>
    </div>
  );
};

export default Confirmation;
