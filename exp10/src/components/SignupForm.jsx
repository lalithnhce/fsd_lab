import React, { useState } from 'react'; 
// We assume App.css (or a global CSS file) is imported in App.js or index.js 
 
const SignupForm = ({ onSignup, onSwitchToLogin }) => { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (name && email && password) { 
      alert(`Signing up with Name: ${name}, Email: ${email}`); 
      onSignup(true); // Call the success handler in App.js 
    } else { 
      alert('Please fill out all fields.'); 
    } 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit} className="auth-form signup-form-custom"> 
      <h2 className="form-title">Sign Up</h2> 
      <div className="input-group-custom"> 
        <span className="icon">👤</span> {/* User icon */} 
        <input 
          type="text" 
          id="signup-name" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        /> 
      </div> 
      <div className="input-group-custom"> 
        <span className="icon">📧</span> {/* Email icon */} 
        <input 
          type="email" 
          id="signup-email" 
          placeholder="Email Id" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /> 
      </div> 
      <div className="input-group-custom"> 
        <span className="icon">🔒</span> {/* Lock icon */} 
        <input 
          type="password" 
          id="signup-password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /> 
      </div> 
      <p className="forgot-password"> 
        Existing Member? <a href="#">Login👇!</a> 
      </p> 
 
      <div className="form-buttons-group"> 
        <button type="submit" className="submit-btn signup-btn-custom">Sign 
Up</button> 
        <button type="button" onClick={onSwitchToLogin} className="switch-btn 
login-switch-btn-custom">Login</button> 
      </div> 
    </form> 
  ); 
}; 
 
export default SignupForm; 