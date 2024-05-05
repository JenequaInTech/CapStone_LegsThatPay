import React, { useState } from 'react';
import { useAuth } from '../componets/AuthContext';
import'../componets/AuthContext.jsx';
import'../componets/LoginForm.jsx';
import '../componets/SignUpForm.jsx';





function Dashboard() {
    const { user } = useAuth();
    const [activeForm, setActiveForm] = useState(null);  // Track which form is active

    const handleShowLogin = () => {
        setActiveForm(activeForm === 'login' ? null : 'login');
    };

    const handleShowSignUp = () => {
        setActiveForm(activeForm === 'signup' ? null : 'signup');
    };

    if (!user) {
        return (
            <div className="container mt-3">
                <h1>Please log in or sign up to see this page</h1>
                <div className="btn-group">
                    <button onClick={handleShowLogin} className="btn btn-primary mr-2">{activeForm === 'login' ? 'Hide Login' : 'Show Login'}</button>
                    <button onClick={handleShowSignUp} className="btn btn-secondary">{activeForm === 'signup' ? 'Hide Sign Up' : 'Show Sign Up'}</button>
                </div>
                {activeForm === 'login' && <LoginForm />}
                {activeForm === 'signup' && <SignUpForm />}
            </div>
        );
    }

    return (
        <div className="container mt-3">
            <h1>Welcome, {user.name}</h1>
            <p>Dashboard content goes here when user is logged in.</p>
        </div>
    );
}

export default Dashboard;