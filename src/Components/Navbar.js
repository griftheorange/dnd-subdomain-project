import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
    <div className="navbar">
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/player/alex">Thrain Stolidfoot</Link>
        </div>
        <div>
            <Link to="/player/julia">Invidia "Seeker" Withring</Link>
        </div>
        <div>
            <Link to="/player/kyle">Peat Barkwater</Link>
        </div>
        <div>
            <Link to="/player/grant">Poppy 'B</Link>
        </div>
        <div>
            <Link to="/player/charles">Charles</Link>
        </div>
    </div>
    );
}

export default Navbar;