import React, { useState } from 'react';
import './index.css';

function Login({ onLogin, onRegisterRedirect }) {
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [showOTP, setShowOTP] = useState(false); // State to control OTP popup
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState(''); // State to store entered OTP
  const [otpError, setOtpError] = useState(''); // State to track OTP verification error

  const handleLogin = () => {
    if (mobile.length !== 10) {
      setMobileError('Please enter a 10-digit mobile number');
      setShowOTP(false); // Hide OTP popup if it was shown previously
      return;
    }

    const otp = generateRandomOTP();
    setGeneratedOTP(otp);
    setShowOTP(true); // Show OTP popup
    setOtpError(''); // Clear previous OTP verification error, if any
  };

  const handleOtpSubmit = () => {
    if (enteredOTP === generatedOTP) {
      // Correct OTP, perform actions here (e.g., redirect user)
      onLogin(); // For example, informing parent component about successful login
      // Redirect the user to their own page
      redirectToUserDashboard();
    } else {
      setOtpError('Invalid OTP, please try again.');
    }
  };

  const generateRandomOTP = () => {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
  };

  const redirectToUserDashboard = () => {
    // Replace this with your actual redirection logic
    // For example, using React Router or any other method you prefer
    // This is just an example using window.location.href
    window.location.href = '/user/dashboard'; // Replace with your page URL
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="image-and-matter">
          <div className="matter-container">
            <h2 className='main_heading'>Login Page</h2>
            <h1 className='heading'>Enter Mobile Number</h1>
            <div className="input-container">
              <span className="country-code">+91</span>
              <input
                type="text"
                placeholder="Enter your 10 Digit Mobile Number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                  setMobileError('');
                  setShowOTP(false); // Hide OTP popup if user modifies input
                }}
              />
            </div>
            {mobileError && <p className="error-message">{mobileError}</p>}
            <button onClick={handleLogin}>Get OTP</button>
            <p onClick={onRegisterRedirect}>Don't have an account? Register here.</p>
          </div>
          <div className="image-container"></div>
        </div>
      </div>
      {showOTP && (
        <div className="otp-popup">
          <h2>Generated OTP</h2>
          <p>Your OTP: {generatedOTP}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOTP}
            onChange={(e) => setEnteredOTP(e.target.value)}
          />
          {otpError && <p className="error-message">{otpError}</p>}
          <button onClick={handleOtpSubmit}>Submit</button>
          <button onClick={() => setShowOTP(false)}>Return</button>
        </div>
      )}
    </div>
  );
}

export default Login;
