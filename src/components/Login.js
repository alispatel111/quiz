// Login.js
import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/flc.jpg'; // Update this path if necessary
import { login, expirePassword } from '../authService'; // Import the expirePassword function

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false); // State for toast

    const handleLogin = (e) => {
        e.preventDefault();
        // Call the authentication function
        if (login(email, password)) {
            onLogin(true); // Set logged in status
            setError('');
            setShowToast(true); // Show toast
            setTimeout(() => setShowToast(false), 3000); // Hide toast
            expirePassword(email); // Mark the user's password as expired
        } else {
            setError('Invalid email or password, or your password has expired.'); // Set error message
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <img src={logo} alt="Logo" />
            </div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
            {showToast && <div className="toast">Login successful!</div>}
        </div>
    );
}

export default Login;
