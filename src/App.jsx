import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/legslogo.jpg';
import DashBoard from './pages/Dashboard';
import Chat from './pages/Chat';
import Feed from './pages/Feed';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-custom">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/Chat">Chat</Link>
          <Link className="nav-link" to="/Feed">Feed</Link>
          <Link className="nav-link" to="/About">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
