import React from 'react';
import {connect} from 'react-redux'
import npcData from '../Resources/Dictionaries/NPCData'
import repEnum from '../Resources/Dictionaries/Reputation'

function AccordionBlock(props) {

    function handleLink(url, event){
        event.stopPropagation()
        let win = window.open(url, "_blank")
        win.focus()
    }

    function toggleSelectedCell(clickedCell){
        if (props.selectedCell == clickedCell) {
            props.setSelectedCell(null)
        } else {
            props.setSelectedCell(clickedCell)
        }
    }

    function genNPCs(){
        return Object.keys(npcData).sort((a, b) => {
            if(npcData[a]['relationship'] == npcData[b]['relationship']){
                return a.localeCompare(b)
            } else {
                return npcData[b]['relationship'] - npcData[a]['relationship']
            }
        }).map((name) => {
            return (
                <li className={repEnum[npcData[name]['relationship']]}>{name}</li>
            )
        })
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
            <div id="encyclopedia" className={props.selectedCell == null ? "cell" : (props.selectedCell == "encyclopedia" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("encyclopedia")
                 }}>
                <h2>Encylop&#230;dia</h2>
                <div className="divider"></div>
                <div className="encyclopedia_div">
                    <div className="npc_block">
                        <h3>Friends and Foes</h3>
                        <ul>
                            {genNPCs()}
                        </ul>
                    </div>
                    <div className="location_block">
                        <h3>Geographica</h3>
                        <ul>
                            <li className="very-friendly">Goldenbridge</li>
                            <li className="neutral">Shattered-Moon Forest</li>
                            <li className="unfriendly">Stonewood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="bestiary" className={props.selectedCell == null ? "cell" : (props.selectedCell == "bestiary" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("bestiary")
                 }}>
                <h2>Bestiary</h2>
                <div className="divider"></div>
                <div className="bestiary_div">
                    <p>Its a Dangerous World...</p>
                </div>
            </div>
            <div id="resources" className={props.selectedCell == null ? "cell" : (props.selectedCell == "resources" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("resources")
                 }}>
                <h2>Resources</h2>
                <div className="divider"></div>
                <div className="resources_div">
                    <p><span onClick={(e) => {handleLink("https://online.anyflip.com/ofsj/cxmj/mobile/index.html#p=1", e)}}>Heroes' Lexicon</span></p>
                    <p><span onClick={(e) => {handleLink("https://www.wizards.com/dnd/dice/dice.htm", e)}}>Cast the Die</span></p>
                    <p><span onClick={(e) => {handleLink("https://i.pinimg.com/originals/ae/da/e0/aedae0f7809fb92bcbe9829ff7ddeebc.png", e)}}>Norman's Guide to Combat</span></p>
                    <p><span onClick={(e) => {handleLink("https://dnd5e.info/equipment/expenses/", e)}}>Frugal Living for the Cost-Conscious Adventurer</span></p>
                    <p><span onClick={(e) => {handleLink("https://dungeonmastertools.github.io/treasure.html", e)}}>Scrolls of Copius Datum</span></p>
                </div>
            </div>
            <div id="schedule" className={props.selectedCell == null ? "cell" : (props.selectedCell == "schedule" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("schedule")
                 }}>
                <h2>Schedule</h2>
                <div className="divider"></div>
                <div className="schedule_div">
                    <iframe src="https://calendar.google.com/calendar/embed?src=3t52ck1rr0aijb96snatgijsfo%40group.calendar.google.com&ctz=America%2FNew_York" style={{border: 0, width: "100%", height: "100%"}} frameborder="0" scrolling="no"></iframe>
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