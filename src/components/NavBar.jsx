import { NavLink } from "react-router-dom";
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
                <div className="navbar-holder">
                    <NavLink to="/">
                        <div className="navbar__items logo">
                            <div className="navbar__items__icon">
                                <GiConqueror />
                            </div>
                            <h3>ROMIT</h3>
                        </div>
                    </NavLink>
                    <div className="navbar__items container">
                        <ul className="navbar__items__holder" ref={navListRef}>
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={toggleNav}
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    onClick={toggleNav}
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/skills"
                                    onClick={toggleNav}
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={toggleNav}
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={toggleNav}
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="hamburger" onClick={toggleNav}>
                            <CgMenuGridR />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
