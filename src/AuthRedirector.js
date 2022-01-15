import React, {useEffect} from 'react'
import { useAuth } from "./contexts/AuthContext"
import { Navigate } from 'react-router-dom';

export default function AuthRedirector({ children }) {

    const { currentUser } = useAuth();

    useEffect(() => {
        <Navigate to="/"></Navigate>
    }, [currentUser])

    return (
        {children}
    )
}
