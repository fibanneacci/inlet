import React from 'react'
import './Song.css'

const Song = (props) => {
    let splitIndex = props.url.indexOf(".com")
    let propsLeft = props.url.substring(0, splitIndex + 5)
    let propsRight = props.url.substring(splitIndex + 5)
    return (
        <iframe src={"" + propsLeft + "embed/" + propsRight} width="300px" height="380px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    );
}

export default Song;