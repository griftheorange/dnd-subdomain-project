import React from 'react';

function Heritage(props) {

    function handleLink(url, event){
        event.stopPropagation()
        let win = window.open(url, "_blank")
        win.focus()
    }

    return (
        <>
        <p onClick={(e) => {handleLink(props.raceURL, e)}}>{props.playerRace}</p>
        <p onClick={(e) => {handleLink(props.classURL, e)}}>{props.playerClass}</p>
        </>
    );
}

export default Heritage;