import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signout(email, password) {
        return auth.signOut();
    }

    useEffect(handleAuthStateChanged, [])

    // As soon as the state of authentication (on login/logout), a variable "user" is given
    // and the state of currentUser is updated to that user.
    // When the auth state changes, the listener returns a method that makes it possible to 
    // unsubscribe from the listener (i.e., deactivate it).
    // This is why we return the "unsubscribe" method in this function.
    function handleAuthStateChanged() {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log("auth state: logged in as " + user.email)
            } else {
                console.log("auth state: logged out")
            }    
            setCurrentUser(user);
        })


        return unsubscribe;
    }
    

    const value = {
        currentUser,
        signup,
        login,
        signout
    }

    if (currentUser) {
        console.log("from value object: " + value.currentUser.email);
    } else {
        console.log("from value object, current user does not exist.")
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
