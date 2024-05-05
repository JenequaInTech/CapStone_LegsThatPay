import React, { useState } from 'react';
import { useAuth } from '../componets/AuthContext';

function SignUpForm() {
  const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
      profilePic: null
  });
  const { signUp } = useAuth();

  const handleChange = (event) => {
      const { name, value, type, files } = event.target;
      if (type === 'file') {
          setFormData({...formData, profilePic: files[0]});
      } else {
          setFormData({...formData, [name]: value});
      }
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      signUp(formData);
  };

  return (
      <form onSubmit={handleSubmit} className="container mt-3">
          <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
              <label htmlFor="profilePic" className="form-label">Profile Picture</label>
              <input type="file" className="form-control" id="profilePic" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
  );
}

export default SignUpForm;
