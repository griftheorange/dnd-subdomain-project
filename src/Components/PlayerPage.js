import React from 'react';
import {connect} from 'react-redux'
import '../CSS/PlayerPage.css'
import playerData from '../Resources/Dictionaries/PlayerData.js'
import DiceRoller from '../Components/DiceRoller.js'

function PlayerPage(props) {

    function toggleCharSheetHidden(){
        if(props.charSheetHidden){
            props.setCharSheetHidden(false)
        } else {
            props.setCharSheetHidden(true)
        }
    }

    console.log(props)
    return (
    <>
    <div className={props.charSheetHidden ? "iframe_div hidden" : "iframe_div"}>
        <iframe title={props.player_name + "_sheet"}src={playerData[props.match.params.player_name]["url"]}></iframe>
        <button className="sheet_button" onClick={toggleCharSheetHidden}><span>Arcana</span></button>
    </div>
    <div className="player_page_content">
        <div className={props.charSheetHidden ? "toolkit_container" : "toolkit_container moved"}>
            <h2>Tools of the Trade</h2>
            <div className="divider"></div>
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