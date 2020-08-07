import React from 'react';
import {connect} from 'react-redux'

function AccordionBlock(props) {

    let geoData = props.appData["GeographyData"]
    let logData = props.appData["LogData"]
    let npcData = props.appData["NPCData"]
    let repEnum = props.appData["Reputation"]
    let beastData = props.appData["Bestiary"]

    function handleLink(url, event){
        event.stopPropagation()
        let win = window.open(url, "_blank")
        win.focus()
    }

    function handleClick(url, event, type){
        event.stopPropagation()
        switch(type){
            case 'log':
                if(url){
                    props.setLog(url, event.target.innerText)
                }
                break
            case 'npc':
                if(url){
                    props.setNPC(url, event.target.innerText)
                }
                break
            case 'area':
                if(url){
                    props.setArea(url, event.target.innerText)
                }
                break
            case 'beast':
                if(url){
                    props.setNPC(url, event.target.innerText)
                }
            default:
                break
        }
    }

    function toggleSelectedCell(clickedCell){
        if (props.selectedCell == clickedCell) {
            props.setSelectedCell(null)
        } else {
            props.setSelectedCell(clickedCell)
        }
    }

    function genRepLis(data, type){
        let subkey = type == 'npc' ? 'relationship' : 'friendliness'
        return Object.keys(data).sort((a, b) => {
            // if(data[a][subkey] == data[b][subkey]){
            //     return a.localeCompare(b)
            // } else {
            //     return data[b][subkey] - data[a][subkey]
            // }
            return a.localeCompare(b)
        }).map((name) => {
            if(type == "npc"){
                return (
                    <li className={repEnum[data[name][subkey]]}><span onClick={(e) => {handleClick(npcData[name]["text_url"], e, type)}}>{name}</span></li>
                )
            } else if(type == "area"){
                return (
                    <li className={repEnum[data[name][subkey]]}><span onClick={(e) => {handleClick(geoData[name]["text_url"], e, type)}}>{name}</span></li>
                )
            } else {
                return null
            }
        })
    }

    function genBeastLis(){
        return Object.keys(beastData).sort((a, b) => {
            // if(beastData[a]["danger"] == beastData[b]["danger"]){
            //     return a.localeCompare(b)
            // } else {
            //     return beastData[b]["danger"] - beastData[a]["danger"]
            // }
            return a.localeCompare(b)
        }).map((beast) => {
            return (
                <li className={repEnum[beastData[beast]["danger"]]}><span onClick={(e) => handleClick(beastData[beast]["text_url"], e, "beast")}>{beast}</span></li>
            )
        })
    }

    function genLogElements(){
        return Object.keys(logData).sort((a, b) => {
            return logData[a]['id'] - logData[b]['id']
        }).map((log) => {
            return (
                <p><span onClick={(e) => {handleClick(logData[log]["text_url"], e, "log")}}>{log}</span></p>
            )
        })
    }

    function genResources(){
        return (
            <>
            {Object.entries(props.appData["Resources"]).map((resource) => {
                return(<p><span onClick={(e) => {handleLink(resource[1], e)}}>{resource[0]}</span></p>)
            })}
            </>
        )
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
                    {genLogElements()}
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
                            {genRepLis(npcData, 'npc')}
                        </ul>
                    </div>
                    <div className="location_block">
                        <h3>Geographica</h3>
                        <ul>
                            {genRepLis(geoData, 'area')}
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
                    <ul>
                        {genBeastLis()}
                    </ul>
                </div>
            </div>
            <div id="resources" className={props.selectedCell == null ? "cell" : (props.selectedCell == "resources" ? "cell selected" : "cell unselected")}
                 onClick={() => {
                     toggleSelectedCell("resources")
                 }}>
                <h2>Resources</h2>
                <div className="divider"></div>
                <div className="resources_div">
                    {genResources()}
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
        selectedCell: state.selectedCell,
        appData: state.appData
    }
}

function mapDispatchToProps(dispatch){
    return {
        setSelectedCell: (value) => {
            dispatch({
                type:"SET_SELECTED_CELL",
                value:value
            })
        },
        setLog: (url, title) => {
            dispatch({
                type:"SET_LOG",
                url:url,
                title:title
            })
        },
        setNPC: (url, title) => {
            dispatch({
                type:"SET_NPC",
                url:url,
                title:title
            })
        },
        setArea: (url, title) => {
            dispatch({
                type:"SET_AREA",
                url:url,
                title:title
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionBlock);