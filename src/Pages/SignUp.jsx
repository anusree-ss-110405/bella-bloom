import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../SignUp.css';

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');  
  const [mailid, setMailid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleMailid = (event) => {
    setMailid(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setconfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      firstname: firstname,
      lastname: lastname,
      mailid: mailid,
      password: password,
    };

    console.log('User Data:', userData);

    axios.post('http://localhost:3003/message', userData)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log("Something went wrong " + error);
      });

    let message = document.getElementById("message");
    if (message) { 
      if (password.length !== 0) {
        if (password === confirmpassword) {
          message.textContent = "Passwords Matched";
          backtologin("/login");
        } else {
          message.textContent = "Passwords didn't Match";
        }
      }
    }
  };

  let backtologin = useNavigate();

  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Welcome</h1>
        <p id="para">By Signing up Unlock Your Beauty Journey!</p>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" onChange={handleFirstname} />
          <input type="text" placeholder="Your Last Name" onChange={handleLastname} />
          <input type="email" placeholder="Email Address" onChange={handleMailid} />
          <input type="password" placeholder="New Password" onChange={handlePassword} />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPassword}
          />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button onClick={handleSubmit}>SignUp</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login"><span>Login here</span></Link>
        </p>
        <p id="message"></p>
      </div>
    </div>
  );
};

export default SignUp;