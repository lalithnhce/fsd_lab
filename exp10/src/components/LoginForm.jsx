import React, { useState } from 'react'; 
// We assume App.css (or a global CSS file) is imported in App.js or index.js 
 
const LoginForm = ({ onLogin, onSwitchToSignup }) => { 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (username && password) { 
      alert(`Logging in with Username: ${username}`); 
      onLogin(true); // Call the success handler in App.js 
    } else { 
      alert('Please enter both username and password.'); 
    } 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit} className="auth-form login-form-custom"> 
      <h2 className="form-title">Login</h2> 
      <div className="input-group-custom"> 
        <span className="icon">👤</span> {/* User icon */} 
        <input  
          type="text" 
          id="login-username" 
          placeholder="Name" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        /> 
      </div> 
      <div className="input-group-custom"> 
        <span className="icon">🔒</span> {/* Lock icon */} 
        <input 
          type="password" 
          id="login-password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /> 
      </div> 
      <p className="forgot-password"> 
        New Member? <a href="#">SignUp 👇</a> 
      </p> 
      <div className="form-buttons-group"> 
        <button type="submit" className="submit-btn login-btn
custom">Login</button> 
        <button type="button" onClick={onSwitchToSignup} className="switch-btn 
signup-switch-btn-custom">Sign Up</button> 
      </div> 
    </form> 
  ); 
}; 
 
export default LoginForm; 