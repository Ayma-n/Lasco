import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, deleteUser } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState("loading");

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signout() {
        return signOut(auth);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function deleteAccount() {
        return deleteUser(currentUser);
    }

    useEffect(handleAuthStateChanged, [])

    // As soon as the state of authentication (on login/logout), a variable "user" is given
    // and the state of currentUser is updated to that user.
    // When the auth state changes, the listener returns a method that makes it possible to 
    // unsubscribe from the listener (i.e., deactivate it).
    // This is why we return the "unsubscribe" method in this function.
    function handleAuthStateChanged() {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null);
            }
        })

        return unsubscribe;
    }
    

    const value = {
        currentUser,
        signup,
        login,
        signout, 
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
