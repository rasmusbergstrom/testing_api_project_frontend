import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import StarterPage from '../StarterPage/StarterPage';
import "./navbar.css";
function Navbar() {
    


    return(
        <div className="topnav">
            <div className="topnav__left">
                <Link to='/JokeView'> JokeAPI 1</Link>
                <Link to='/StarterPage'> Startpage</Link>
                <Link to='/FootballTracker'> Football Tracker</Link>
            </div>
        </div>
    )
}
export default Navbar;