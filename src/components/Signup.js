import React, { useState, useRef } from 'react';
import "../css/Signup.css"
import demoLogo from "../sample/posts/demo-logo.png";
import { Link, useNavigate } from "react-router-dom";

// This line imports the custom hook we created in AuthContext which returns
// the AuthContext with a useContext() hook applied on it.
import { useAuth } from "../contexts/AuthContext";

// Imports useDb to get data from the database
import { useDb } from "../contexts/DatabaseContext";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import test from '../sample/posts/fakeProfileCircle.png';

function Signup() {

    let newUID;
    const storage = getStorage();
   


    // We create refs for the data we will need to gather from the form.
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const usernameRef = useRef(); 
    const useCaseRef = useRef();

    // Deconstructs the useAuth() hook to get signup and login
    const { signup, login, currentUser, updateUserProfile } = useAuth();

    // Deconstructs the useDb() hook to get the database
    const { createUser } = useDb();

    // Creates a state for errors.
    const [error, setError] = useState('');

    // Creates a loading state that we will use to disable the button when the signup is
    // being processed.
    const [loading, setLoading] = useState(false);

    // Uses to useNavigate hook to redirect user
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // If we want a confirm password, we can put this here


        // When first signing up, we make sure that the error is blank.
        // Then, we set loading to true, before we actually fire up the async signup method
        // When it's done, the loading state is set to false.
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                newUID = userCredential.user.uid;
            });
            await login(emailRef.current.value, passwordRef.current.value);

            console.log(newUID);

            await createUser({
                uid: newUID,
                username: usernameRef.current.value,
                displayName: nameRef.current.value,
                useCase: useCaseRef.current.value,
                photoURL: "https://i.imgur.com/57elNxz.jpg",
            })
            // const imageRef = ref(storage, 'image.jpg');
          
            // uploadBytes(imageRef, test).then((snapshot) => {
            //     console.log('File uploaded!')
            // })

            // await updateUserProfile(nameRef.current.value, "https://i.imgur.com/xED7N8L.png").then(() => {
            //     console.log('user profile updated')
            // }).catch((err) => {
            //     console.error(err)
            // });

            navigate("/feed");
        } catch(err) {
            console.error(err);
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
                    <input id="name" type="text" placeholder="Name" ref={nameRef}/>
                    <input id="email" type="text" placeholder="E-mail" ref={emailRef}/>
                    <input id="username" type="text" placeholder="Username" ref={usernameRef}/>
                    <input id="password" type="password" placeholder='Password' ref={passwordRef} />
                    <select id="use-for" placeholder='What will you use Lasco for?' ref={useCaseRef}>
                        <option value="">What will you use Lasco for?</option>
                        <option value="buyer">Looking to buy art.</option>
                        <option valie="artist">Looking to be part of a community of artists.</option>
                    </select>
                    {/* If currently loading, the sign up button is disabled. */}
                    <button id="sign-button" className='filled-btn' disabled={loading}>Sign Up</button>
                    <div id="has-account">Already have an account? <Link id= "login-link" className="magenta-text" to="/login">Login</Link></div>
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