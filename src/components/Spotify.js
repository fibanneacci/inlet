import React from 'react'
import './Spotify.css'

const Spotify = (props) => {
    let input = props.url
    if (input.length != 0) {
        if (input.includes("episode")) { // podcast
            let splitIndex = props.url.indexOf(".com")
            let propsLeft = props.url.substring(0, splitIndex + 5)
            let propsRight = props.url.substring(splitIndex + 5)
            return (
<<<<<<< HEAD
                <iframe src={"" + propsLeft + "embed-podcast/" + propsRight} style={{ left: props.x, top: props.y }} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
=======
                <iframe src={"" + propsLeft + "embed-podcast/" + propsRight} left={props.x} top={props.y} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
>>>>>>> 126614a8803d471a397a4d86873c066a0f5c6a59
            );
        } else { // music
            let splitIndex = props.url.indexOf(".com")
            let propsLeft = props.url.substring(0, splitIndex + 5)
            let propsRight = props.url.substring(splitIndex + 5)
            return (
<<<<<<< HEAD
                <iframe src={"" + propsLeft + "embed/" + propsRight} style={{ left: props.x, top: props.y }} width="300px" height="380px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
=======
                <iframe src={"" + propsLeft + "embed/" + propsRight} left={props.x} top={props.y} width="300px" height="380px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
>>>>>>> 126614a8803d471a397a4d86873c066a0f5c6a59
            );
        }
    }
}

export default Spotify;


// class SpotifySearch extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             SongArray: []
//         }
//         this.createSpotifyCard = this.createSpotifyCard.bind(this)
//     }

//     createSpotifyCard() {
//         let input = document.getElementsByClassName("Spotify-search-input")[0].value
//         if (input.length != 0) {
//             if (input.includes("episode")) { // podcast
//                 this.setState({
//                     SongArray: this.state.SongArray.concat([<Podcast key={this.state.SongArray.length} url={input} />])
//                 })
//             } else { // music
//                 this.setState({
//                     SongArray: this.state.SongArray.concat([<Song key={this.state.SongArray.length} url={input} />])
//                 })
//             }
//         }
//         console.log(this.state.SongArray.length)
//     }

//     render() {
//         return (
//             <div>
//                 <div className="Spotify-search">
//                     <div className="Spotify-search-bar">
//                         <label htmlFor="Spotify-search-text">Search Spotify: </label>
//                         <input className="Spotify-search-input" type="text" id="Spotify-search-text" name="Spotify-search-text" onChange={this.createSpotifyCard} />
//                     </div>
//                 </div>
//                 <div style={{ position: `absolute`, width: `500px`, height: `500px`, top: `200px`, left: `400px`, backgroundColor: `red` }}>
//                     {this.state.SongArray}
//                 </div>
//             </div>
//         );
//     }
// }

// export default SpotifySearch;
