import React, {useState, useEffect} from 'react';
import hearth from '../Resources/Pictures/fire-burning-animated-gif-image.gif'
import {connect} from 'react-redux'

function HomeLeftContent(props) {

    function genLog(){
        fetch(props.homeURL)
        .then((r) => {return r.text()})
        .then((html) => {
            var el = document.createElement( 'html' )
            el.innerHTML = html
            let body = el.getElementsByTagName("body")
            body = Array.apply(null, body[0].childNodes).map((tag) => {
                if(tag.firstElementChild.firstElementChild){
                    return (
                        <div>
                            <img src={tag.firstElementChild.firstElementChild.src}></img>
                        </div>
                    )
                } else {
                    return (
                        <p className="fade_in_p">
                            {tag.innerText}
                        </p>
                    )
                }
            })
            setContent(
                <div className="home_left_block">
                    <div className="log_title">
                       <p className="fade_in_span">{props.homeTitle}</p>
                    </div>
                    <div className="log_content">
                        {body}
                    </div>
                </div>
            )
        })
    }

    function genNPC(){
        fetch(props.homeURL)
        .then((r) => {return r.text()})
        .then((html) => {
            var el = document.createElement( 'html' )
            el.innerHTML = html
            let body = el.getElementsByTagName("body")
            let image
            body = Array.apply(null, body[0].childNodes).map((tag) => {
                if(tag.firstElementChild.firstElementChild){
                    image = (
                        <img src={tag.firstElementChild.firstElementChild.src}></img>
                    )
                } else {
                    return (
                        <p className="text_styler">
                            {tag.innerText}
                        </p>
                    )
                }
            })
            setContent(
                <div className="home_left_block">
                    <div className="log_title">
                        <h2 className="text_styler">{props.homeTitle}</h2>
                    </div>
                    <div className="npc_content">
                        <div className="npc_pic_box">
                            {image}
                        </div>
                        <div className="npc_text">
                            {body}
                        </div>
                    </div>
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
                genLog()
                break;
            case 'npc':
                genNPC()
                break;
            case 'area':
                genLog()
                break;
            default:
                setContent(genWelcome());
        }
    }, [props.homeDisplay, props.homeURL])

    return content
}

function mapStateToProps(state){
    return {
        homeDisplay:state.homeDisplay,
        homeURL:state.homeURL,
        homeTitle:state.homeTitle
    }
}

export default connect(mapStateToProps)(HomeLeftContent);