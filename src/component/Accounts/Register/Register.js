import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from '../../Loading/Loading';
import "../AccountFormStyle/AccountFormStyle.css";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // register
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // update profile
  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const update = () => {
      updateProfile({ displayName });
    };
    if (!loading) {
      update();
    }
  }, [displayName, loading, updateProfile]);

  return (
    <div className="account-section">
      <div className="account-container">
        <div className="account-title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  onBlur={(e) => setDisplayName(e.target.value)}
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
                  onBlur={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input
                  onBlur={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  onBlur={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm your password"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">
                  Phone Number <small>(optional)</small>
                </span>
                <input
                  onBlur={(e) => setPhoneNumber(e.target.value)}
                  type="number"
                  placeholder="Enter your number"
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
            {loading && <Loading></Loading>}
          </form>
          <p className="toggle">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="condition-warning">
            By continuing, you agree to our <Link to="#">Terms of Service</Link>
            . Read our <Link to="#">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
