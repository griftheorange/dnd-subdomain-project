import React from 'react';

function Heritage(props) {

    function handleLink(url, event){
        event.stopPropagation()
        let win = window.open(url, "_blank")
        win.focus()
    }

    return (
        <>
        <p onClick={(e) => {handleLink(props.raceURL, e)}}>Heritage</p>
        <p onClick={(e) => {handleLink(props.classURL, e)}}>Profession</p>
        </>
    );
}

export default Heritage;