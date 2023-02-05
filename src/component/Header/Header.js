import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import logo from "../../asset/logo.svg";
import auth from "../../firebase.init";
import "./Header.css";
// https://cdn4.iconfinder.com/data/icons/saas-ui-design-essentials/14/hamburger-512.png

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const [isMenu, setIsMenu] = useState(false);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <nav>
        <div className="nav-bar-1">
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
                src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
                alt=""
              />
            </div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/"}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/order"}
            >
              Orders
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/inventory"}
            >
              Inventory
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/about"}
            >
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
        </div>
        <div className="nav-bar-2">
          <NavLink to={"/"}>
            <img width={"90px"} src={logo} alt="" />
          </NavLink>
          <div onClick={() => setIsMenu(!isMenu)}>
            <img
              width={"25px"}
              src="https://cdn4.iconfinder.com/data/icons/saas-ui-design-essentials/14/hamburger-512.png"
              alt=""
            />
          </div>
          <ul className={` ${isMenu ? "show" : "hidden"}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/"}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/order"}
            >
              Orders
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/inventory"}
            >
              Inventory
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
              to={"/about"}
            >
              About
            </NavLink>
            {!user ? (
              <div className="nav-2-item ">
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
