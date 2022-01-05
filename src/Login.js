import React, { useState } from 'react';
import "./Login.css";
import demoLogo from "./sample/posts/demo-logo.png";

function Login() {
    return (<>
        <div id="Login">
            <div id="left-rect">
                <div id="welcome-text">Welcome <span class="magenta-text">Back.</span></div>
                <form>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' />
                    <button id="sign-button">Login</button>
                </form>
                <div id="logo-div">
                    <img src={demoLogo}></img>
                    <div>Lasco</div>
                </div>
            </div>
            <div id="right-rect"></div>
        </div>
    </>);
}

export default Login;