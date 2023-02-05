import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "../Accounts/AccountFormStyle/AccountFormStyle.css";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const cartItem = JSON.parse(localStorage.getItem('shoppingCart'));
    const shipping = { displayName, email, address, phoneNumber, cartItem };
    localStorage.removeItem("shoppingCart");
    console.log(shipping);

      fetch("https://bike-show-server.vercel.app/orders",{
        method: "POST",
        headers: {
          'content-type' : 'application/json',
        },
        body: JSON.stringify(shipping)
      })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged){
          alert('order confirm successfully!');
          navigate('/order')
        } 
      })
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
            
              <div className="input-box">
                <span className="details">Email</span>
                <input
                name="email"
                  style={{ color: "dimgray" }}
                  value={user?.email}
                  readOnly
                  type="text"
                  placeholder="Enter your email"
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Address</span>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter your Address"
                  required
                ></input>
              </div>
    
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="number"
                  placeholder="Enter your number"
                  required
                ></input>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Add Shipping"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
