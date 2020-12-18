import React from 'react'
import './Youtube.css'

const Youtube = (props) => {
    let splitIndex = props.url.indexOf(".com")
    let propsLeft = props.url.substring(0, splitIndex)
    let splitIndex2 = props.url.indexOf("watch?v=")
    let propsRight = props.url.substring(splitIndex2 + 8)
    return (
        <iframe width="560" height="315" src={propsLeft + "-nocookie.com/embed/" + propsRight} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
}

export default Youtube;
