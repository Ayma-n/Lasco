import React, { useState } from 'react';
import "./Signup.css"
import demoLogo from "./sample/posts/demo-logo.png";

function Signup() {
    return (<>
        <div id="Signup">
            <div id="left-rect">
                <div id="exploreText">Explore Art. <span class="magenta-text">Together.</span></div>
                <form>
                    <input id="name" type="text" placeholder="Name" />
                    <input id="email" type="text" placeholder="E-mail"/>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' />
                    <select id="use-for" placeholder='What will you use Lasco for?'>
                        <option value="">What will you use Lasco for?</option>
                        <option value="buyer">Looking to buy art.</option>
                        <option valie="artist">Looking to be part of a community of artists.</option>
                    </select>
                    <button id="sign-button">Sign Up</button>
                </form>
                <div id="logoDiv">
                    <img src={demoLogo}></img>
                    <div>Lasco</div>
                </div>
            </div>
            <div id="right-rect"></div>
        </div>
    </>  );
}

export default Signup;