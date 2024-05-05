import React, { useState } from 'react';
import { useAuth } from '../componets/AuthContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password); // Assuming 'login' function takes username and password
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
