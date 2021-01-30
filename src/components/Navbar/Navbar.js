import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <div className='navbar'>
        
        <div id='link'><Link to="/">Home</Link></div>
        <div id='link'> <Link to="/Category">Category </Link></div>
      </div>
    );
  };
  export default Navbar;