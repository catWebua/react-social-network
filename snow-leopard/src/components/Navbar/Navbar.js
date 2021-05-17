import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <ul className={s.list}>
                <li><NavLink className={`${s.item} ${s.active}`} activeClassName={s.ativeLink} to="/profile">Profile</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.ativeLink} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.ativeLink} to="/news">News</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.ativeLink} to="/music">Music</NavLink></li>
                <li><NavLink className={s.item} activeClassName={s.ativeLink} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
