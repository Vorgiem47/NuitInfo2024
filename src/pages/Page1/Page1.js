import './Page1.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  // État pour gérer le nom d'utilisateur et le mot de passe
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lastPassword, setLastPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentPassword = password;
    const previousPassword = lastPassword;
    let newErrorMessages = [...errorMessages];
    if (currentPassword !== previousPassword) {
      if (attempts === 1) {
        newErrorMessages.unshift('Too Short');
        alert('Too Short');
      }
      if (attempts === 2) {
        newErrorMessages.unshift('Missing Number');
        alert('Missing Number');
      }
      if (attempts === 3) {
        newErrorMessages.unshift('Missing Comma');
        alert('Missing Comma');
      }
      if (attempts === 4) {
        newErrorMessages.unshift('Missing point');
        alert('Missing point');
      }
      if (attempts === 5) {
        newErrorMessages.unshift('Missing Uppercase Letter');
        alert('Missing Uppercase Letter');
      }
      if (attempts === 6) {
        newErrorMessages.unshift('Missing Lowercase Letter');
        alert('Missing Lowercase Letter');
      }
      if (attempts === 7) {
        newErrorMessages.unshift('Missing Special Character');
        alert('Missing Special Character');
      }
      if (attempts === 8) {
        newErrorMessages.unshift('Too long');
        alert('Too long');
      }
      if (attempts === 9) {
        newErrorMessages.unshift('Weak Password');
        alert('Weak Password');
      }
      if (attempts === 10) {
        newErrorMessages.unshift('Password Reuse Detected');
        alert('Password Reuse Detected');
      }
      if (attempts === 11) {
        newErrorMessages.unshift('Common Password');
        alert('Common Password');
      }
      if (attempts === 12) {
        newErrorMessages.unshift('Too easy to guess');
        alert('Too easy to guess');
      }
      if (attempts === 13) {
        newErrorMessages.unshift('you suck');
        alert('you suck');
      }
      if (attempts === 14) {
        newErrorMessages.unshift('still wrong password');
        alert('still wrong password');
      }
      if (attempts === 15) {
        newErrorMessages.unshift('i feel bad for you');
        alert('i feel bad for you');
      }
      if (attempts === 16) {
        newErrorMessages.unshift('write a random password it will work');
        alert('write a random password it will work');
      }
      if (attempts === 17) {
        setIsLoggedIn(true);
      }
      setAttempts(prevAttempts => prevAttempts + 1);
    }
    setErrorMessages(newErrorMessages);
    setLastPassword(currentPassword);
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/page2');
    }
  }, [isLoggedIn]);

  return (
    <div className="page1-container">
      <h1>Button Game</h1>
      <h2>log in</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            id="username"
            className="shake"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            className="shake"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="error-messages">
          {errorMessages.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>{error}</p>  // Affiche chaque message d'erreur
          ))}
        </div>

        <button type="submit">log in</button>
      </form>
    </div>
  );
};

export default Page1;

