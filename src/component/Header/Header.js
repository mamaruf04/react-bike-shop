import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import cartIcon from "../../asset/cart.svg";
import logo from "../../asset/logo.svg";
import menuIcon from "../../asset/menu-2.svg";
import searchIcon from "../../asset/search.svg";
import auth from "../../firebase.init";
import "./Header.css";


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  console.log(user);

  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <nav className="nav-bar">
        <div>
          <NavLink to={"/"}>
            <img width={"130px"} src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav-item">
          <div className="input-field">
            <input className="input" placeholder="Search" type="text" />
            <img
              className="search-icon"
              width={"20px"}
              src={searchIcon}
              alt=""
            />
          </div>
          {user ? <p>user: {user.displayName}</p> : ""}
          {loading ? <p>Loading...</p> : ""}
          {!user && (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to={"/registration"}
            >
              <button>Register</button>
            </NavLink>
          )}
          {user && <button onClick={handleSignOut}>Sign Out</button>}
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to={"/order"}
          >
            <img width={"35px"} src={cartIcon} alt="" />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to={"/"}
          >
            <img width={"30px"} src={menuIcon} alt="" />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
