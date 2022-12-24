import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "../Accounts/AccountFormStyle/AccountFormStyle.css";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const shipping = { displayName, email, address, phoneNumber };
    console.log(shipping);
  };

  return (
    <div className="account-section">
      <div className="account-container">
        <div className="account-title">Shipping Information</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Your Name</span>
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
                  style={{ color: "dimgray" }}
                  value={user?.email}
                  readOnly
                  type="text"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Address</span>
                <input
                  onBlur={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter your Address"
                  required
                ></input>
              </div>
              {/* <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  onBlur={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm your password"
                  required
                ></input>
              </div> */}
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  onBlur={(e) => setPhoneNumber(e.target.value)}
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
              <input type="submit" value="Add Shipping"></input>
            </div>
            {/* {loading && <Loading></Loading>} */}
          </form>
          {/* <p className="toggle">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="condition-warning">
            By continuing, you agree to our <Link to="#">Terms of Service</Link>
            . Read our <Link to="#">Privacy Policy</Link>.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Shipment;
