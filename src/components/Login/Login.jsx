import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://www.kingsman.uz/api/auth/login", {
            username,
            password,
        }).then((res) => {
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
        }).catch((err) => { setError("Invalid username or password") });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <p>{error}</p>
            <button type="submit">Login</button>
        </form>
    )
}
