import React from 'react';
import {Link} from 'react-router-dom'
import playerData from '../Resources/Dictionaries/PlayerData'
import {connect} from 'react-redux'

function Navbar(props) {
    return (
    <div className="navbar">
        <div>
            <Link onClick={props.setStateToHome}to="/">Home</Link>
        </div>
        <div>
            <Link to="/player/alex">{playerData["alex"]["char_name"]}</Link>
        </div>
        <div>
            <Link to="/player/julia">{playerData["julia"]["char_name"]}</Link>
        </div>
        <div>
            <Link to="/player/kyle">{playerData["kyle"]["char_name"]}</Link>
        </div>
        <div>
            <Link to="/player/grant">{playerData["grant"]["char_name"]}</Link>
        </div>
        <div>
            <Link to="/player/charles">{playerData["charles"]["char_name"]}</Link>
        </div>
    </div>
    );
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return {
        setStateToHome: () => {
            dispatch({
                type:"SET_HOME"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);