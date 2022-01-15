import React, { useState, useEffect } from 'react'
import Login from './Login'
import { useAuth } from "./contexts/AuthContext"
import { Navigate } from 'react-router-dom';

export default function LoginWaiter() {

    const [hasWaited, setHasWaited] = useState(false);
    const [hasChanged, setHasChanged] = useState(false);

    const { currentUser } = useAuth();

    useEffect(() => {
        const timer = setTimeout(() => {
          setHasWaited(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {(hasWaited) ? <Navigate to="/login"/> : <div>Loading...</div>}
        </div>
    )
}
