import React from 'react';
import './header.css';

import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
                
                <img className="header-img" src={logo} alt=""/>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage Inventory</a>
                </nav>
        </div>
    );
};

export default Header;