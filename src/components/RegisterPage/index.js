// src/registration/index.js
import React, { useState } from 'react';
import './index.css';

function Registration({ onRegistration }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  const handleRegister = () => {
    // Here, you can implement logic to register the user
    // For this example, we'll just log the registration data
    console.log('Registering:', { username, email, userType });
    onRegistration(); // Inform parent component about successful registration
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <h2>Registration Page</h2>
       
        <h1 className='heading'>Username</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
    
        <h1 className='heading'>Email</h1>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      
        <h1 className='heading'>UserType</h1>
        <input
          type="text"
          placeholder="User Type"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        />
        
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Registration;
