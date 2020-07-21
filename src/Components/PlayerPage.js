import React from 'react';
import {connect} from 'react-redux'
import '../CSS/PlayerPage.css'

function PlayerPage(props) {

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
        <iframe src={props.iframe_url}></iframe>
        <button className="sheet_button" onClick={toggleCharSheetHidden}><span>Arcana</span></button>
    </div>
    <div className="player_page_content">

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