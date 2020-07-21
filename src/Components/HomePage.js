import React from 'react';
import '../CSS/HomePage.css'
import hearth from '../Resources/Pictures/fire-burning-animated-gif-image.gif'
import AccordionBlock from './AccordionBlock.js'

function HomePage(props) {
    return (
        <div className="home_page_div">
            <div className="home_left_block">
                <div className="welcome">
                    <h1><span className="first_span">Welcome</span> <span className="second_span">Adventurers...</span></h1>
                </div>
                <div className="details">
                    <div className="image_center">
                        <img className="hearth" src={hearth}></img>
                    </div>
                </div>
            </div>
            <div className="home_right_block">
                <AccordionBlock/>
            </div>
        </div>
    );
}

export default HomePage;