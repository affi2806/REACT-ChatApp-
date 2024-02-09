// Import necessary React modules
import React, { useState } from 'react';

// SignupForm component for the signup form
const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic if needed
    onSignup({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

// Main SignupPage component
const SignupPage = () => {
  const handleSignup = (userData) => {
    // Add signup logic here, e.g., sending user data to a registration API
    console.log('Signing up with:', userData);
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default SignupPage;
