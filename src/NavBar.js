import React, { useState } from 'react';
import './NavBar.css'
function NavBar() {
    return (<div id="NavBar">
        <div id="logo-div">
        <img id="logo-img" src={demoLogo} />
        <div>Lasco</div>
      </div>
        <div className="flexbox" id="middle-nav">
            <a href="community" className="nav-link" id="community">Community</a>
            <a href="governance" className="nav-link"  id="governance">Governance</a>
            <a href="about" className="nav-link" id="about">About</a>
        </div>
        <div id="button-div-2">
            <a href="/login">
              <button className="login-signup" id="login-button">
                <div className="text-gradient">Login</div>
              </button>
            </a>
            <a href="/signup">
              <button className="login-signup" id="signup-button">
                <div className="text-white">Signup</div>
              </button>
            </a>
          </div>
        </div>);
}

export default NavBar;