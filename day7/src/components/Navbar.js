import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id='navbar'>
        <div id='logo'>
            Noddy
        </div>

        <div id='rightSideNav'>
            <a href='#'>Home</a>
            <a href='#'>Projects</a>
            <a href='#'>Team</a>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar