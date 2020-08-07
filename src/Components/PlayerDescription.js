import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

function PlayerDescription(props) {

    let [descriptionElements, setDescriptionElements] = useState(null)

    function getDescriptionBlock(){
        if(descriptionElements){
            return(
                <div className="character_description_block">
                    {descriptionElements}
                </div>
            )
        } else {
            return null
        }
    }

    useEffect(() => {
        setDescriptionElements(null)
        fetch(props.textURL)
        .then((r) => {return r.text()})
        .then((html) => {
            var el = document.createElement( 'html' )
            el.innerHTML = html
            let body = el.getElementsByTagName("body")
            body = Array.apply(null, body[0].childNodes).map((tag) => {
                if(tag.childNodes[0].childNodes.length > 0){
                    if(tag.childNodes[0].childNodes[0].tagName){
                        props.setPlayerDescPicture(tag.childNodes[0].childNodes[0].src)
                    } else {
                        return (
                            <p>
                                {Array.from(tag.childNodes).map((node) => {
                                    return node.innerText
                                }).join("")}
                            </p>
                        )
                    }
                }
            })
            setDescriptionElements(body)
        })
    }, [props.textURL])

    return getDescriptionBlock()
}

function mapState(state){
    return {}
}

function mapDispatch(dispatch){
    return {
        setPlayerDescPicture:(value)=>{
            dispatch({
                type:"SET_PLAYER_DESC_PICTURE",
                value:value
            })
        }
    }
}

export default connect(mapState, mapDispatch)(PlayerDescription);