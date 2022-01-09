import React, { useState } from 'react';
import './NavBar.css'
import demoLogo from "./sample/posts/demo-logo.png";
function NavBar() {
    return (<div id="NavBar">
        <a href="/" id="logo-div-2">
        <img id="logo-img-2" src={demoLogo} />
        <div>Lasco</div>
      </a>
        <div id="middle-nav">
            <a href="community" className="nav-link" id="community">Community</a>
            <a href="governance" className="nav-link"  id="governance">Governance</a>
            <a href="about" className="nav-link" id="about">About</a>
        </div>
        <div id="button-div-2">
            <a href="/login">
              <button className="clear-btn" id="login-button">
                <span className="text-gradient">Login</span>
              </button>
            </a>
            <a href="/signup">
              <button className="filled-btn" id="signup-button">Signup</button>
            </a>
          </div>
        </div>);
}

export default NavBar;