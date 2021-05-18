import React from 'react';
import Quote from '../../images/quote.png'
import NBA from '../../images/Game.png'
import AM from '../../images/am.png'
import Vol from '../../images/Max-vol.png'

import "./portfolio.scss"



const Portfolio = () => {
    return (
        <div className="portfolio" id ="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">JavaScript</li>
                <li className="active">React</li>
                <li className="active"> MERN</li>      
            </ul>
                 <div className="container"> 
                <div className="item">
                <img src={Quote} alt="Q" />
                <a href ="https://msenat7432.github.io/quote-generator/"> Quote Generator</a>
                </div>
                 <div className="item">
                <img src={NBA} alt= "NBA" />
               <a href ="https://msenat7432.github.io/nbaTrivia/"> Nba Trivia</a>
                </div>
                 <div className="item">
                <img src={AM} alt="AM" />
                <a href ="https://am-commerce-frontend.herokuapp.com/"> AM-Commerce</a>
                </div>
                 <div className="item">
                <img src={Vol} alt="MaxVolume" />
                <a href ="https://msenat7432.github.io/Max-volume1/"> Max Volume</a>
                </div>
                
            </div>
         </div>
    );
};

export default Portfolio;