import React from "react";
import './navbar.css'
import Portfolio from "./portfolio";
import ContactPage from "./contacts";

const NavBar = () => {
    return (
    <div className="navContainer">
        <div className="navbar">
            <a>Van</a>
            <div className="deskmenu">
                <a className="menuitemlist">About me</a>
                <a className="menuitemlist" href="#Portfolio">Projects </a>
                <a className="menuitemlist" href="#ContactPage">Contact me</a>
            </div>
        </div>
    </div>
    
    )
} 

export default NavBar