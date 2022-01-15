import React from 'react'
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectLink }) {
    const { currentUser } = useAuth();
    if (currentUser) {
        console.log("from private route : " + currentUser.email);
    } else {
        console.log("from private route, current user does not exist");
    }    
    return (currentUser ? children : <Navigate to={redirectLink}></Navigate>);
}
