import React from "react";
import { Link } from "react-router-dom";
import "../AccountFormStyle/AccountFormStyle.css";
const Register = () => {
  return (
    <div className="account-section">
      <div className="account-container">
        <div className="account-title">Registration</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              {/* <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required
                ></input>
              </div> */}
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
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">
                  Phone Number <small>(optional)</small>
                </span>
                <input
                  type="number"
                  placeholder="Enter your number"
                  required
                ></input>
              </div>
            </div>
            {/* <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"></input>
              <input type="radio" name="gender" id="dot-2"></input>
              <input type="radio" name="gender" id="dot-3"></input>
              <span className="gender-title">Gender</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div> */}
            <div className="button">
              <input type="submit" value="Register"></input>
            </div>
          </form>
          <p className="toggle">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="condition-warning">
            
              By continuing, you agree to our <Link to="#">Terms of Service</Link>.
               Read our <Link to="#">Privacy Policy</Link>.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
