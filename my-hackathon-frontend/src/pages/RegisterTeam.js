import React, { useState } from 'react';
import '../RegisterTeam.css';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

const RegisterTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState([{ fullName: '', email: '', birthDate: '', role: '' }]);
  const [isLookingForTeam, setIsLookingForTeam] = useState(false);

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const newMembers = [...members];
    newMembers[index][name] = value;
    setMembers(newMembers);
  };

  const handleAddMember = () => {
    setMembers([...members, { fullName: '', email: '', birthDate: '', role: '' }]);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ teamName, members, isLookingForTeam });

    // After successful submission, redirect to another page
    navigate('/register-success');
  };

  return (
    <div className="container">
      <header className="register-header">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
      </header>
      <div className="form-container">
        <h2>Step 2</h2>
        <h1>Team information</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className='looking-for-team'
              type="checkbox"
              checked={isLookingForTeam}
              onChange={() => setIsLookingForTeam(!isLookingForTeam)}
            />
            I'm looking for a team to join
          </label>
          {!isLookingForTeam && (
            <div>
              <label>
                Team name*
                <input
                  type="text"
                  name="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter team name"
                  required
                />
              </label>
              <h3>Team members</h3>
              <p>You don’t have to provide your personal information again. Min size of the team 3 ppl, max size of the team 5 ppl, you included.</p>
              {members.map((member, index) => (
                <div key={index} className="member">
                  <label>
                    Team member full name*
                    <input
                      type="text"
                      name="fullName"
                      value={member.fullName}
                      onChange={(e) => handleMemberChange(index, e)}
                      placeholder="Enter team member full name"
                      required
                    />
                  </label>
                  <label>
                    Team member e-mail address*
                    <input
                      type="email"
                      name="email"
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, e)}
                      placeholder="Enter team member e-mail address"
                      required
                    />
                  </label>
                  <label>
                    Team member date of birth*
                    <input
                      type="text"
                      name="birthDate"
                      value={member.birthDate}
                      onChange={(e) => handleMemberChange(index, e)}
                      placeholder="DD-MM-YYYY"
                      required
                    />
                  </label>
                  <label>
                    Role*
                    <select
                      name="role"
                      value={member.role}
                      onChange={(e) => handleMemberChange(index, e)}
                      required
                    >
                      <option value="">Select role</option>
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="Project Manager">Project Manager</option>
                    </select>
                  </label>
                </div>
              ))}
              <button type="button" className="button button--alt" onClick={handleAddMember}>+ Add another team member</button>
            </div>
          )}
          <button className="button button--final" type="submit">Send registration form</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTeam;
