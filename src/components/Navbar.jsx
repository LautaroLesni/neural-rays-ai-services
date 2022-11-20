import React from "react";
import './Navbar.css'
import customlogo from '../assets/neuralrays-ai.png'
import { useState } from "react";

const Navbar = () =>{
    const [navbarscroll, setNavbarScroll] = useState(false)
    const handleNavbarScroll = () => {
        if (window.scrollY >= 100){
            setNavbarScroll(true)
        }
        else{
            setNavbarScroll(false)
        }
    }
    window.addEventListener('scroll',handleNavbarScroll)
    return (
        <div className={navbarscroll ? 'NavbarDIV NavbarDIV-scroll' : 'NavbarDIV'}>
            <img src={customlogo} alt='neuralrays' className="customlogo"/>
            <ul className="ulnavbar">
                <li>Home</li>
                <li>About us</li>
                <li>AI Services</li>
                <li className="AI-Solutions">AI Solutions</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar