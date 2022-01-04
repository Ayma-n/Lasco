import React, { useState } from 'react';
import "./Login.css";
import demoImg from "./sample/posts/demo-login-artwork.png";

function Login() {
    return (<>
        <div id="Login">
            <div id="loginRect">
                <div id="welcomeText">Welcome <span id="backColor">Back.</span></div>
                <form>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' />
                    <button id="loginButton">Login</button>
                </form>
            </div>
            <div id="imgDiv">
                {/* <img src={demoImg}></img> */}
            </div>
        </div>
    </>);
}

export default Login;