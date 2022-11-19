import React from "react";
import s from './Footer.module.css'
import customlogo from '../assets/neuralrays-ai.png'
/* import factory from '../assets/Factory.jpg' */
import { FiChevronsRight } from "react-icons/fi";

const Footer = () => {
    return (<div className={s.FooterDIV}>
        <div className={s.FooterULalign}>
            <div className={s.Footerlogo}>
                <img src={customlogo} alt='custom logo' className={s.customlogo}/>
            </div>
            <div className={s.FooterList}>
                <h3>AI SERVICES</h3>
                <ul className={s.ulfooter}>
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Data Strategy Consulting</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Data Science & AI Consulting</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>AI Solution Development</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>AI-Driven Automation</li> 
                </ul>
            </div>
            <div className={s.FooterList}>
            <h3>AI SOLUTIONS</h3>
                <ul className={s.ulfooter}>
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Electric Vehicle Charging (EVC)</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Environmental Risk Reduction</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Preventive Maintenance</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Remote Health Monitoring</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Smart Warehouse Management</li> <hr className={s.barra} />
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>Virtual Reality For Smart Engineering</li>
                </ul>
            </div>
            <div className={s.FooterList}>
                <h3>CONTACT US</h3>
                <ul className={s.ulfooter}>
                    <li><FiChevronsRight style={{color: "#288ee4"}} className={s.flechita}/>hello@neuralrays.ai</li>
                </ul>
            </div>
        </div>
    </div>)
}

export default Footer