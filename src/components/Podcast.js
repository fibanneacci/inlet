import React from 'react'
import './Spotify-embed.css'

const Podcast = (props) => {
    let splitIndex = props.url.indexOf(".com")
    let propsLeft = props.url.substring(0, splitIndex + 5)
    let propsRight = props.url.substring(splitIndex + 5)
    return (
        <iframe src={"" + propsLeft + "embed-podcast/" + propsRight} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    );
}

export default Podcast;
