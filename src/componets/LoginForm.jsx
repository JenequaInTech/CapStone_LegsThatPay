import React, { useState } from 'react';
import { useAuth } from '../componets/AuthContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        login({ name: username });  // Pass a user object to the login function
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
