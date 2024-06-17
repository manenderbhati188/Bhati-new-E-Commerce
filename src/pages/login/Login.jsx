import React, { useState } from "react";
import './login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validate = () => {
    let isValid = true;
    const emailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;

    if (!email.trim()) {
      alert ("Email is required.");
      isValid = false;
    } 
    else if (!emailPattern.test(email)) {
    alert("Email address is invalid.");
    isValid = false;
    setEmail("");
    }

    else if (!password.trim()) {
      alert( "Password is required.");
      isValid = false;
    } 
    else if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      isValid = false;
      setPassword("");
    }
    else if(password.length>16){
      alert("Password length not more than 16 digit");
      isValid = false;
      setPassword("");
    }
    
    return isValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      alert("User Login Successfully");
      setEmail("");
      setPassword("");

    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handlEmailChange}
            placeholder="Enter your email"
            
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
