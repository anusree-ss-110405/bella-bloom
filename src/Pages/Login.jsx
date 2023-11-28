import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
  const [email, setMailid] = useState('');
  const handleMail = (event) => {
    setMailid(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:3003/message?mailid=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length > 0) {
          navigate("/");
        } else {
          alert("User account doesn't exist");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div className='lognsignup'>
      <div className="logn-signup-container">
        <h1>Welcome Back!</h1>
        <p>Be Beautiful, Be You, Be In!</p>
        <div className="lognsignup-fields">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email Address' onChange={handleMail} />
            <input type="password" placeholder='Password' onChange={handlePassword} />
          </form>
        </div>
        <button onClick={handleSubmit}>Login</button>
        <p className="lognsignup-login">
          Don't have an account? <Link to='/signup'><span>SignUp here</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
