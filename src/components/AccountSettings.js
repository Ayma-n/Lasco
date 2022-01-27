import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { useDb } from '../contexts/DatabaseContext';

export default function AccountSettings() {

    const { currentUser, updateUserEmail, updateUserPassword, reauthenticateUser, deleteAccount } = useAuth();
    const { getProfileData } = useDb();

    const emailRef = useRef();
    const oldPasswordRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
    const nameRef = useRef();
    const usernameRef = useRef();

    const [error, setError] = useState()
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState();

    const [userInfo, setUserInfo] = useState({displayName: "", username: ""});

    async function fetchUserData() {
        //console.log(currentUser.uid);
        const userInfoObj = await getProfileData(currentUser.uid);
        //console.log(userInfoObj);
        //console.log(userInfoObj);
        //console.log(currentUser.uid);
        setUserInfo(userInfoObj);
        //console.log(userInfoObj);
    }

    useEffect(fetchUserData, []);
    
    const navigate = useNavigate();

    function handleSubmit(e) {
        setError("");
        setLoading(true);
        e.preventDefault();

        reauthenticateUser(oldPasswordRef.current.value)
        .catch((err) => {
            console.error(err);
            return setError("Invalid current password.")
        })

        // If passwords do not match, then update the error and return (stops the method)
        if (passwordRef.current.value !== passwordConfRef.current.value) {
            setLoading(false);
            return setError("Passwords do not match!")
        }

        // Array of promises that should all be resolved later.
        const promises = []
        
        // If the email given by the user in the form is different from the user's current email,
        // then update Email (adds a promise to the array of promises)
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateUserEmail(emailRef.current.value));
        }

        // If the password's not blank, then update the user's password to that.
        if (passwordRef.current.value) {
            promises.push(updateUserPassword(passwordRef.current.value));
        }

        Promise.all(promises)
        .then(() => {
            setMessage("Account settings updated successfully.")
        })
        .catch(() => {
            setError("Failed to update account settings.")
        })
        .finally(() => {
            setLoading(false);
        })

    }

    async function submitAccountDeletion() {
        setLoading(true);
        deleteAccount()
        .then(() => {
            // This does NOT work: it goes back to settings and redirects to login because of the private route.
            return navigate("/");
        })
        .catch(() => {
            setLoading(false);
            return setError("We encountered an error in deleting your account.")
        })
        setLoading(false);
    }


    return (
        <div id="AccountSettings">
            <div>Account Settings</div>
            {error && <div>{error}</div>}
            {message && <div>{message}</div>}
            <form onSubmit={handleSubmit}>
                <label>Display Name:</label>
                <input value={userInfo.displayName} ref={nameRef}></input>
                <label>Username: </label>
                <input value={userInfo.username} ref={usernameRef}></input>
                <label>Email: </label>
                <input type="email" value={currentUser.email} ref={emailRef}></input>
                <label>Current Password: </label>
                <input type="password" ref={oldPasswordRef}></input>
                <label>New Password: </label>
                <input type="password" ref={passwordRef}></input>
                <label>Password Confirmation: </label>
                <input type="password" ref={passwordConfRef}></input>
                <button disabled={loading}>Update</button>
            </form>
            <button onClick={submitAccountDeletion}>DELETE ACCOUNT</button>
        </div>
    )
}
