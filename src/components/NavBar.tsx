import React from "react"
import {NavLink} from "react-router-dom";

const NavBar: React.FC = (props) => {
    return (
        <nav className="indigo lighten-2">
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo">React + TS</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Инфо</NavLink></li>
                </ul>
            </div>
        </nav>
    )
} 

export default NavBar