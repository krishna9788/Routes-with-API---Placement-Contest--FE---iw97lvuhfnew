import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
        <Link className='site-title'>Site Name</Link>
        <ul>
            <li>
                <Link className='top-ten'>Top 10</Link>
            </li>
            <li>
                <Link className='contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar