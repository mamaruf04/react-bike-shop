import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../asset/cart.svg';
import logo from '../../asset/logo.svg';
import menuIcon from '../../asset/menu-2.svg';
import searchIcon from '../../asset/search.svg';

import './Header.css';
const Header = () => {
    return (
      <>
        <nav className="nav-bar">
          <div>
            <Link to={"/"}>
              <img width={"130px"} src={logo} alt="" />
            </Link>
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
            <Link to="/order">
              <img width={"35px"} src={cartIcon} alt="" />
            </Link>
            <img width={"30px"} src={menuIcon} alt="" />
          </div>
        </nav>
      </>
    );
};

export default Header;