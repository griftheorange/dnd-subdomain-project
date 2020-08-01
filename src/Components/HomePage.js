import React from 'react';
import '../CSS/HomePage.css'
import AccordionBlock from './AccordionBlock.js'
import HomeLeftContent from './HomeLeftContent';
import {connect} from 'react-redux'

function HomePage(props) {

    props.resetPlayerDescPicture()

    return (
        <div className="home_page_div">
            <HomeLeftContent/>
            <div className="home_right_block">
                <AccordionBlock/>
            </div>
        </div>
    );
}

function mapState(state){
    return {}
}

function mapDispatch(dispatch){
    return {
        resetPlayerDescPicture:()=>{
            dispatch({
                type:"RESET_PLAYER_DESC_PICTURE"
            })
        }
    }
}

export default connect(mapState, mapDispatch)(HomePage);