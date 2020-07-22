import React from 'react';
import {connect} from 'react-redux'
import '../CSS/PlayerPage.css'
import playerData from '../Resources/Dictionaries/PlayerData.js'
import DiceRoller from '../Components/DiceRoller.js'
import Heritage from '../Components/Heritage.js'
import PlayerDescription from '../Components/PlayerDescription.js'

function PlayerPage(props) {

    let player_name = props.match.params.player_name

    function toggleCharSheetHidden(){
        if(props.charSheetHidden){
            props.setCharSheetHidden(false)
        } else {
            props.setCharSheetHidden(true)
        }
    }

    return (
    <>
    <div className={props.charSheetHidden ? "iframe_div hidden" : "iframe_div"}>
        <iframe title={props.player_name + "_sheet"}src={playerData[player_name]["url"]}></iframe>
        <button className="sheet_button" onClick={toggleCharSheetHidden}><span>Arcana</span></button>
    </div>
    <div className="player_page_content">
        <h1>{playerData[player_name]['char_name']}</h1>
        <div className="player_description">
            <div className="content_half">
                <img src={playerData[player_name]["picture_url"]}></img>
            </div>
            <div className="content_half">
                <PlayerDescription textURL={playerData[player_name]["description_url"]}/>
            </div>
        </div>
        <div className={props.charSheetHidden ? "toolkit_container" : "toolkit_container moved"}>
            <h2>Tools of the Trade</h2>
            <div className="divider"></div>
            <div className="history">
                <Heritage playerClass={playerData[player_name]['class']} playerRace={playerData[player_name]['race']} classURL={playerData[player_name]['class_url']} raceURL={playerData[player_name]['race_url']}/>
            </div>
            <div className="divider"/>
            <div className="player_die_container">
                <DiceRoller/>
            </div>
        </div>
    </div>
    </>
    );
}

function mapStateToProps(state){
    return {
        charSheetHidden:state.charSheetHidden
    }
}

function mapDispatchToProps(dispatch){
    return {
        setCharSheetHidden: (value) => {
            dispatch({
                type:"SET_CHAR_SHEET_HIDDEN",
                value:value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);