import React from 'react';
import { Link } from 'react-router-dom';
import "../AccountFormStyle/AccountFormStyle.css";
const Login = () => {
    return (
      <div className="account-section">
        <div className="account-container">
          <div className="account-title">Login</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    required
                  ></input>
                </div>
              </div>
              <p>Forgot Password? <Link>Reset</Link></p>
              <div className="button">
                <input type="submit" value="Login"></input>
              </div>
            </form>
            <p className="toggle">
              Don't have an account? <Link to="/registration">Register</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;