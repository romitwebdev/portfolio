import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { GiConqueror } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import React, { useRef } from "react";

const NavBar = () => {
    const navRef = useRef();
    const navListRef = useRef();
    const toggleNav = () => {
        navRef.current.classList.toggle("active");
        navListRef.current.classList.toggle("active");
    };

    return (
        <>
            <div className="navbar" ref={navRef}>
                <Link to="/">
                    <div className="navbar__items logo">
                        <div className="navbar__items__icon">
                            <GiConqueror />
                        </div>
                        <h3>ROMIT</h3>
                    </div>
                </Link>
                <div className="navbar__items container">
                    <ul className="navbar__items__holder" ref={navListRef}>
                        <li>
                            <Link to="/" onClick={toggleNav}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={toggleNav}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleNav}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleNav}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={toggleNav}>
                        <CgMenuGridR />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
