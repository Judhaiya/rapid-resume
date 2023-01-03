import React from 'react';
import Styles from '../landing.module.css';
const Navbar = () => {
    return (
        <div className={`${Styles["navbar-container"]} fw-bold`}>
            <div className="logo">NUEBIE</div>
            <div className="menu-items__wrapper">
                <ul className={Styles["menu-items__container"]}>
                    <li>Tools</li>
                    <li>Templates</li>
                    <li>Best Practices</li>
                    <li>Blog</li>
                </ul>
            </div>
            <button className={`${Styles["cta-btn"]} fw-bold`}>Sign Up</button>
        </div>
    )
}

export default Navbar