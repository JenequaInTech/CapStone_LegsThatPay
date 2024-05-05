import React, { useState } from 'react';
import { useAuth } from '../componets/AuthContext';

function Dashboard() {
    const { user } = useAuth(); // Getting user from AuthContext
    const [profile, setProfile] = useState({
        privacy: 'public', // Default to public
        email: '',
        phoneNumber: '',
        profilePhoto: null,
    });

    if (!user) {
        return <h1>Please log in to see this page</h1>;
    }

    // Handle changes in form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    // Handle profile photo upload
    const handlePhotoChange = (event) => {
        setProfile(prev => ({ ...prev, profilePhoto: event.target.files[0] }));
    };

    // Example submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(profile);
        // Here you would typically handle the form submission to the backend
    };

    // User is logged in, show the dashboard
    return (
        <div className="container mt-3">
            <h1>Welcome, {user.name}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="profilePhoto">Profile Photo:</label>
                    <input type="file" className="form-control-file" id="profilePhoto" onChange={handlePhotoChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="privacy">Profile Privacy:</label>
                    <select className="form-control" id="privacy" name="privacy" value={profile.privacy} onChange={handleChange}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email" value={profile.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" className="form-control" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </div>
    );
}

export default Dashboard;
