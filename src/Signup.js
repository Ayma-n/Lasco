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

    // Creates a state for errors.
    const [error, setError] = useState('');

    // Creates a loading state that we will use to disable the button when the signup is
    // being processed.
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        // If we want a confirm password, we can put this here


        // When first signing up, we make sure that the error is blank.
        // Then, we set loading to true, before we actually fire up the async signup method
        // When it's done, the loading state is set to false.
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('Something wrong happened with creating your account...');   
        }
        setLoading(false);
    }

    return (<>
        <div id="Signup">
            <div id="left-rect">
                <div id="explore-text">Explore Art. <span className="magenta-text">Together.</span></div>
                {error && <div>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input id="name" type="text" placeholder="Name" />
                    <input id="email" type="text" placeholder="E-mail" ref={emailRef}/>
                    <input id="username" type="text" placeholder="Username" />
                    <input id="password" type="password" placeholder='Password' ref={passwordRef} />
                    <select id="use-for" placeholder='What will you use Lasco for?'>
                        <option value="">What will you use Lasco for?</option>
                        <option value="buyer">Looking to buy art.</option>
                        <option valie="artist">Looking to be part of a community of artists.</option>
                    </select>
                    {/* If currently loading, the sign up button is disabled. */}
                    <button id="sign-button" className='filled-btn' disabled={loading}>Sign Up</button>
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