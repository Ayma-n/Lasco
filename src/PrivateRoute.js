import React from 'react'
import { Outlet } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import LoginWaiter from './LoginWaiter';

export default function PrivateRoute() {

    const navigate = useNavigate();

    const { currentUser } = useAuth();
    if (currentUser) {
        console.log("from private route : " + currentUser.email);
    } else {
        console.log("from private route, current user does not exist");
    }    
    return (currentUser ? <Outlet/> : <LoginWaiter/>);
}
