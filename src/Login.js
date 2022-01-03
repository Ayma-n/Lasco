import React, { useState } from 'react';
import "./Login.css";

function Login() {
    return (<>
        <div id="container">
            <div id="loginRect">
                <div id="inputSec">

                </div>
                <div id="welcomeText">Welcome <span id="backColor">Back.</span></div>
                <form>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' />
                    <button id="loginButton">Login</button>
                </form>
            </div>
            {/* <div id="imgDiv">
            </div> */}
        </div>
    </>);
}

export default Login;