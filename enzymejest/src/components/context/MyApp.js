import React from 'react'
import { useAuthContext } from "./AuthProvider";

export default function MyApp() {
    
    const { authed, login, logout } = useAuthContext();
    return (
        <div>
            <h1>{authed ? "You are logged in" : "You are logged out"}</h1>
                {authed ? (
                    <button onClick={logout}>Log out</button>
                ) : (
                    <button onClick={login}>Log in</button>
                )}
        </div>
    )
}
