import React from 'react';
import cartIcon from '../../asset/cart.svg';
import logo from '../../asset/logo.svg';
import menuIcon from '../../asset/menu-2.svg';
import searchIcon from '../../asset/search.svg';
import Shop from '../Shop/Shop';

import './Header.css';
const Header = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div>
                    <img width={'130px'} src={logo} alt="" />
                </div>
                <div className='nav-item'>
                    <div className='input-field'>
                        <input className='input' placeholder='Search' type="text" />
                        <img className='search-icon' width={'20px'} src={searchIcon} alt="" />
                    </div>
                    <img width={'35px'} src={cartIcon} alt="" />
                    <img width={'30px'} src={menuIcon} alt="" />
                </div>
            </nav>
            <Shop></Shop>
        </>
    );
};

export default Header;