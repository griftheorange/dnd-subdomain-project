import React, {useState, useEffect} from 'react';
import hearth from '../Resources/Pictures/fire-burning-animated-gif-image.gif'
import {connect} from 'react-redux'

function HomeLeftContent(props) {

    function genLog(){
        fetch(props.logURL)
        .then((r) => {return r.text()})
        .then((html) => {
            var el = document.createElement( 'html' )
            el.innerHTML = html
            let body = el.getElementsByTagName("body")
            body = Array.apply(null, body[0].childNodes).map((tag) => {
                return (
                    <p className="fade_in_p">
                        {tag.innerText}
                    </p>
                )
            })
            body.unshift(
                <div className="log_title">
                    <h2><span className="fade_in_span">{props.logTitle}</span></h2>
                </div>
            )
            setContent(
                <div className="home_left_block">
                    {body}
                </div>
            )
        })
    }

    function genWelcome(){
        return (
            <div className="home_left_block">
                <div className="welcome">
                    <h1><span className="first_span">Welcome</span> <span className="second_span">Adventurers...</span></h1>
                </div>
                <div className="details">
                    <div className="image_center">
                        <img className="hearth" src={hearth}></img>
                    </div>
                </div>
            </div>
        )
    }

    let [content, setContent] = useState(null)

    useEffect(() => {
        switch(props.homeDisplay){
            case 'log':
                setContent(genLog())
            default:
                setContent(genWelcome());
        }
    }, [props.homeDisplay, props.logURL])

    return content
}

function mapStateToProps(state){
    return {
        homeDisplay:state.homeDisplay,
        logURL:state.logURL,
        logTitle:state.logTitle
    }
}

export default connect(mapStateToProps)(HomeLeftContent);