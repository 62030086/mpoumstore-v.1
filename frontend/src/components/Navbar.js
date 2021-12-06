import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/*logo*/}
            <div className="nav-logo">
                <h1>MPOUMSTORE</h1>
            </div>

            {/*link*/}
            <ul className="nav_link">
                <li>
                    <Link to='/cart'>
                    
                    </Link>
                </li>
            </ul>

            {/*hbg menu*/}
        </nav>
    )
}

export default Navbar;
