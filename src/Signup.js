import React, { useState } from 'react';
import "./Signup.css"
import demoLogo from "./sample/posts/demo-logo.png";
import { Link } from "react-router-dom";

// This line imports the custom hook we created in AuthContext which returns
// the AuthContext with a useContext() hook applied on it.
import { useAuth } from "./contexts/AuthContext";

function Signup() {
    // We create refs for the data we will need to gather from the form.
    const emailRef = useRef();
    const passwordRef = useRef();

    // We get the usable AuthContext with useAuth().
    const authContext = useAuth();

    // We get the signup method from the auth context.
    const signup = authContext.signup;

    function handleSubmit(e) {
        e.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value);
    }

    return (<>
        <div id="Signup">
            <div id="left-rect">
                <div id="explore-text">Explore Art. <span className="magenta-text">Together.</span></div>
                <form onSubmit="handleSubmit()">
                    <input id="name" type="text" placeholder="Name" />
                    <input id="email" type="text" placeholder="E-mail" ref={emailRef}/>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' ref={passwordRef} />
                    <select id="use-for" placeholder='What will you use Lasco for?'>
                        <option value="">What will you use Lasco for?</option>
                        <option value="buyer">Looking to buy art.</option>
                        <option valie="artist">Looking to be part of a community of artists.</option>
                    </select>
                    <button id="sign-button" className='filled-btn'>Sign Up</button>
                    <div id="has-account">Already have an account? <Link id= "login-link" class="magenta-text" to="/login">Login</Link></div>
                </form>
                <div id="logo-div">
                    <img src={demoLogo}></img>
                    <div>Lasco</div>
                </div>
            </div>
            <div id="right-rect"></div>
        </div>
    </>  );
}

export default Signup;