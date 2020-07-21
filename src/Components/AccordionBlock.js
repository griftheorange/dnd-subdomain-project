import React from 'react';
import {connect} from 'react-redux'

function AccordionBlock(props) {

    function toggleSelectedCell(clickedCell){
        if (props.selectedCell == clickedCell) {
            props.setSelectedCell(null)
        } else {
            props.setSelectedCell(clickedCell)
        }
    }

    return (
        <div className="accordion">
            <div id="logs" className={props.selectedCell == null ? "cell" : (props.selectedCell == "logs" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("logs")
                 }}>
                <h2>Logs</h2>
                <div className="divider"></div>
                <div className="logs_div">
                    <p>Julius 21st, 2020AD - Prelude</p>
                    <p>Augustine 2nd, 2020AD - A story to be told...</p>
                </div>
            </div>
            <div id="schedule" className={props.selectedCell == null ? "cell" : (props.selectedCell == "schedule" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("schedule")
                 }}>
                <h2>Schedule</h2>
                <div className="divider"></div>
                <div className="schedule_div">

                </div>
            </div>
            <div id="resources" className={props.selectedCell == null ? "cell" : (props.selectedCell == "resources" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("resources")
                 }}>
                <h2>Resources</h2>
                <div className="divider"></div>
                <div className="resources_div">
                    <a target="_blank" href="https://online.anyflip.com/ofsj/cxmj/mobile/index.html#p=1">Players Handbook</a>
                </div>
            </div>
            <div id="encyclopedia" className={props.selectedCell == null ? "cell" : (props.selectedCell == "encyclopedia" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("encyclopedia")
                 }}>
                <h2>Encylop&#230;dia</h2>
                <div className="divider"></div>
                <div className="encyclopedia_div">

                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {
        selectedCell: state.selectedCell
    }
}

function mapDispatchToProps(dispatch){
    return {
        setSelectedCell: (value) => {
            dispatch({
                type:"SET_SELECTED_CELL",
                value:value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionBlock);