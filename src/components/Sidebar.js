import './Sidebar.css';
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import blob from '../assets/blob.svg'

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar-icon">
                <Link to="/user-profile"><img src={logo} alt="React atom logo" /></Link>
            </div>
            <div className="Sidebar-blob">
                <Link to="/blob-1"><img src={blob} alt="Blue blob 1" /></Link>
            </div>
            <div className="Sidebar-blob">
                <Link to="/blob-2"><img src={blob} alt="Blue blob" /></Link>
            </div>
            <div className="Sidebar-blob">
                <Link to="/blob-3"><img src={blob} alt="Blue blob" /></Link>
            </div>
            <div className="Sidebar-blob">
                <Link to="/blob-4"><img src={blob} alt="Blue blob" /></Link>
            </div>
            <div className="Sidebar-blob">
                <Link to="/blob-5"><img src={blob} alt="Blue blob" /></Link>
            </div>
            <div className="Sidebar-blob">
                <Link to="/blob-6"><img src={blob} alt="Blue blob" /></Link>
            </div>
            <div className="Sidebar-blob" style={{ fontSize: `3rem` }}>
                <Link to="/add-blob" style={{ color: `#FFFFFF`, textDecoration: `none` }}>+</Link>
            </div>
        </div>
    );
}

export default Sidebar;
