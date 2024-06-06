import React, { useState } from "react";
import { links } from "../../utils";
import { NavLink } from "react-router-dom";
import nav_logo from "../../assets/nav_logo.svg";
import "./Navbar.css";

const Navbar = () => {
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    return (
        <nav>
            <div className="wrapper nav_container">
                <div className="nav_logo">
                    <img src={nav_logo} alt="digital project logo" />
                </div>
                <ul
                    className={`nav_items ${
                        hamburgerToggle ? "show_nav" : "hide_nav"
                    }`}
                >
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                onClick={() => setHamburgerToggle(false)}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "active_nav" : undefined
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={() => setHamburgerToggle((prev) => !prev)}
                    className={`hamburger ${hamburgerToggle ? "close" : ""}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
