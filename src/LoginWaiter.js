import React, { useState, useEffect } from 'react'
import Login from './Login'

export default function LoginWaiter() {

    const [hasWaited, setHasWaited] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setHasWaited(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {hasWaited ? <Login/> : <div>Loading...</div>}
        </div>
    )
}
