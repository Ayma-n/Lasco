import React, { useState } from 'react';
import "./Login.css";
import demoLogo from "./sample/posts/demo-logo.png";

function Login() {
    return (<>
        <div id="Loginicon">
            <div id="loginRect">
                <div id="welcomeText">Welcome <span id="backColor">Back.</span></div>
                <form>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' />
                    <button id="loginButton">Login</button>
                </form>
                <div id="logoDiv">
                    <img src={demoLogo}></img>
                    <div>Lasco</div>
                </div>
            </div>
            <div id="imgDiv"></div>
        </div>
    </>);
}

export default Login;