import React from "react";
import './portfolio.css'
import atm from './Images/atm.png'
import calcu from './Images/calcu.jpg'
import hotel from './Images/hotel.jpg'
const Portfolio = () => {
    return (
    <div className="portfolio" id="Portfolio">
        <h1>MY PORTFOLIO</h1>
        <div className="portfoliorow">
            <div className="portfoliocolumn">
                <img src={atm} alt="testing"className="Imgs"/>
                <h2>ATM Machine</h2>
                <p> An ATM machine simulation in C++ programmed by me</p>
            </div>
            <div class="portfoliocolumn">
                <img src={calcu} alt="testing"className="Imgs"/>
                <h2>Calculator</h2>
                <p> A calculator designed in c++</p>
            </div>
            <div class="portfoliocolumn">
                <img src={hotel} alt="testing" className="Imgs"/>
                <h2  class="colorChangeText">Hotel booking program</h2>
                <p> A program for hotel booking reservation</p>
               
            </div>
        </div>
    </div>
    
    )
}

export default Portfolio