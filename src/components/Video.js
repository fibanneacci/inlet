import React from 'react'
import './Video.css'

const Video = (props) => {
    let input = props.url
    if (input.length != 0) {
        let splitIndex = props.url.indexOf(".com")
        let propsLeft = props.url.substring(0, splitIndex)
        let splitIndex2 = props.url.indexOf("watch?v=")
        let propsRight = props.url.substring(splitIndex2 + 8)
        return (
            <iframe width="560" height="315" src={propsLeft + "-nocookie.com/embed/" + propsRight} style={{ left: props.x, top: props.y }} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        );
    }
}

export default Video;


// class YoutubeSearch extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             YoutubeArray: []
//         }
//         this.createYoutubeCard = this.createYoutubeCard.bind(this)
//     }

//     createYoutubeCard() {
//         let input = document.getElementsByClassName("Youtube-search-input")[0].value
//         if (input.length != 0) {
//             this.setState({
//                 YoutubeArray: this.state.YoutubeArray.concat([<Youtube key={this.state.YoutubeArray.length} url={input} />])
//             })
//         }
//         console.log(this.state.YoutubeArray.length)
//     }

//     render() {
//         return (
//             <div>
//                 <div className="Youtube-search">
//                     <div className="Youtube-search-bar">
//                         <label htmlFor="Youtube-search-text">Search Youtube: </label>
//                         <input className="Youtube-search-input" type="text" id="Youtube-search-text" name="Youtube-search-text" onChange={this.createYoutubeCard} />
//                     </div>
//                 </div>
//                 <div style={{ position: `absolute`, width: `500px`, height: `500px`, top: `200px`, left: `400px`, backgroundColor: `red` }}>
//                     {this.state.YoutubeArray}
//                 </div>
//             </div>
//         );
//     }
// }

// export default YoutubeSearch;
