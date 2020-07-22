import React, {useState, useEffect} from 'react';

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
                return (
                    <p>
                        {tag.innerText}
                    </p>
                )
            })
            setDescriptionElements(body)
        })
    }, [props.textURL])

    return getDescriptionBlock()
}

export default PlayerDescription;