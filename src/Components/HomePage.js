import React from 'react';
import '../CSS/HomePage.css'
import AccordionBlock from './AccordionBlock.js'
import HomeLeftContent from './HomeLeftContent';

function HomePage(props) {
    return (
        <div className="home_page_div">
            <HomeLeftContent/>
            <div className="home_right_block">
                <AccordionBlock/>
            </div>
        </div>
    );
}

export default HomePage;