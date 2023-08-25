import React, { useState } from 'react';
import './App.css';
import Login from "./components/loginpage";
import Registration from './components/RegisterPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleRegisterRedirect = () => {
    setRegistered(true);
  };

  const handleRegistration = () => {
    setLoggedIn(true);
    setRegistered(false);
  };

  return (
    <div className="App">
      {!loggedIn && !registered && (
        <Login onLogin={handleLogin} onRegisterRedirect={handleRegisterRedirect} />
      )}
      {!loggedIn && registered && (
        <Registration onRegistration={handleRegistration} />
      )}
      {loggedIn && <p>Welcome to your own page!</p>}
    </div>
  );
}

export default App;



