import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import "../AccountFormStyle/AccountFormStyle.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendPasswordResetEmail, sending, passwordResetError] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
    .then(data => {
      if(data.user){
        navigate(from, { replace: true });
      }
      
    })
    
  };

  return (
    <div className="account-section">
      <div className="account-container">
        <div className="account-title">Login</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  onBlur={(e) => setEmail(e.target.value)}
                  type="email"
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+"
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
            </div>
            <p>
              Forgot Password?{" "}
              <Link onClick={() => sendPasswordResetEmail(email)}>Reset</Link>
            </p>
            <div className="button">
              <input type="submit" value="Login"></input>
            </div>
            {loading && <Loading></Loading>}
            {error ? <p style={{ color: "red" }}>{error.message}</p> : ""}
            {passwordResetError && (
              <p style={{ color: "red" }}>{passwordResetError.message}</p>
            )}
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
