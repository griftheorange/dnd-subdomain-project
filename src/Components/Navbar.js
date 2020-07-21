import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
    <div className="navbar">
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/alex">Thrain Stolidfoot</Link>
        </div>
        <div>
            <Link to="/julia">Invidia "Seeker" Withring</Link>
        </div>
        <div>
            <Link to="/kyle">Peat Barkwater</Link>
        </div>
        <div>
            <Link to="/grant">Grant</Link>
        </div>
        <div>
            <Link to="/charles">Charles</Link>
        </div>
    </div>
    );
}

export default Navbar;