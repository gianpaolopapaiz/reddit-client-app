import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    return (
        <header id='nav-bar'>
            <img 
                id="nav-logo" 
                src={`${process.env.PUBLIC_URL}/assets/reddit-icon.png`}  
                alt=''
            />
            <p>Reddit Client App</p>
        </header>
    );
}