import React from "react";
import './Navbar.css'
import customlogo from '../assets/neuralrays-ai.png'

const Navbar = () =>{
    return (
        <div className="NavbarDIV">
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