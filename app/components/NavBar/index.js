import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const App = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                <li>
                    <Link to="/">Anthony Wang</Link>
                </li>
            </ul>
            <ul className="navbar-right">
                <li>
                    <Link to="/">My Work</Link>
                </li>
                <li>
                    <Link to="/aboutme">About Me</Link>
                </li>
                <li>
                    <Link to="/photography">Photography</Link>
                </li>
            </ul>
        </nav>
    );
};

export default App;
