import React, { useState } from 'react'; 
import './App.css'; // Your custom CSS is imported here 
import LoginForm from './components/LoginForm'; // Import the Login component 
import SignupForm from './components/SignupForm'; // Import the Signup component
 
function App() { 
  const [isLoginView, setIsLoginView] = useState(true); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
 
  const handleLogin = (success) => { 
    if (success) { 
      setIsLoggedIn(true); 
    } 
  }; 
 
  const handleSignup = (success) => { 
    if (success) { 
      alert('Sign up successful! Please log in.'); 
      setIsLoginView(true); // Switch to login after successful sign-up 
    } 
  }; 
 
  const handleLogout = () => { 
    setIsLoggedIn(false); 
    alert('Logged out!'); 
  }; 
 
  // Helper functions to pass to the child components for switching views 
  const switchToLogin = () => setIsLoginView(true); 
  const switchToSignup = () => setIsLoginView(false); 
 
 
  return ( 
    <div className="app-container"> 
      <h1>SIGN UP FORM</h1> 
       
      {/* Conditional Rendering: Logged In vs. Forms */} 
      {isLoggedIn ? ( 
        // --- Logged In Dashboard --- 
        <div className="dashboard"> 
          <h2>🎉 Welcome! You are logged in.</h2> 
          <p>This is your personalized dashboard content.</p> 
          <button onClick={handleLogout} className="logout-btn"> 
            Log Out 
          </button> 
        </div> 
      ) : ( 
        // --- Login/Signup Forms --- 
        isLoginView ? ( 
          <LoginForm  
            onLogin={handleLogin}  
            onSwitchToSignup={switchToSignup} // Pass the switch function 
          /> 
        ) : ( 
          <SignupForm  
            onSignup={handleSignup}  
            onSwitchToLogin={switchToLogin} // Pass the switch function 
          /> 
        ) 
      )} 
    </div> 
  ); 
} 
 
export default App;