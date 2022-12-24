import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import logo from "../../asset/logo.svg";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <nav className="nav-bar">
        <div>
          <NavLink to={"/"}>
            <img width={"130px"} src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav-item">
          {/* <div className="input-field">
            <input className="input" placeholder="Search" type="text" />
            <img
              className="search-icon"
              width={"20px"}
              src={searchIcon}
              alt=""
            />
          </div> */}
          {user ? <p>user: {user.displayName}</p> : ""}
          
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
            to={"/"}
          >
            {/* <img width={"35px"} src={cartIcon} alt="" /> */}
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
            to={"/order"}
          >
            {/* <img width={"35px"} src={cartIcon} alt="" /> */}
            Orders
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
            to={"/inventory"}
          >
            {/* <img width={"30px"} src={menuIcon} alt="" /> */}
            Inventory
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
            to={"/about"}
          >
            {/* <img width={"30px"} src={menuIcon} alt="" /> */}
            About
          </NavLink>
          {!user ? (
            <div className="nav-item ">
              <NavLink className="nav-link" to={"/login"}>
                <span className="log-in-out-btn">Login</span>
              </NavLink>
              <NavLink className="nav-link" to={"/registration"}>
                <span className="log-in-out-btn">Register</span>
              </NavLink>
            </div>
          ) : (
            <NavLink className="nav-link">
              <span className="log-in-out-btn" onClick={handleSignOut}>
                Sign Out
              </span>
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
