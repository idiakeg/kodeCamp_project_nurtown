import React from "react";
import { links } from "../../utils";
import { NavLink } from "react-router-dom";
import nav_logo from "../../assets/nav_logo.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="wrapper nav_container">
                <div className="nav_logo">
                    <img src={nav_logo} alt="digital project logo" />
                </div>
                <ul className="nav_items">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink
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
            </div>
        </nav>
    );
};

export default Navbar;
