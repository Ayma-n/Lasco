import React from 'react';
import { useAuth } from "./contexts/AuthContext";

export default function AccountSettings() {

    const { currentUser } = useAuth();

    return (
        <div id="AccountSettings">
            <div>Account Settings</div>
            <form>
                <label>Email: </label>
                <input type="email" value={currentUser.email}></input>
                <label>Current Password: </label>
                <input type="password"></input>
                <label>New Password: </label>
                <input type="password"></input>
                <label>Password Confirmation: </label>
                <input type="password"></input>
                <button>Update</button>
            </form>
        </div>
    )
}
