import React, { useState } from 'react';
import '../RegisterPeople.css';
import logo from '../logo.svg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    birthDate: '',
    role: '',
    timeZone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);

    // After successful submission, redirect to another page
    navigate('/register-step-2');
  };

  return (

    <div className="container">
      <header className="register-header">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
      </header>
      <div className="form-container">
        <h2>Step 1</h2>
        <h1>Personal information</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Full name*
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </label>
          <label>
            E-mail address*
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your e-mail address"
              required
            />
          </label>
          <label>
            Date of birth*
            <input
              type="text"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="DD-MM-YYYY"
              required
            />
          </label>
          <label>
            Role*
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select role</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </label>
          <label>
            Time zone*
            <select
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              required
            >
              <option value="">Select time zone</option>
              <option value="UTC-12">UTC-12</option>
              <option value="UTC-11">UTC-11</option>
              <option value="UTC-10">UTC-10</option>
              {/* Add other time zones as needed */}
            </select>
          </label>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
