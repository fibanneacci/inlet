import React from 'react'
import './Spotify.css'
import Song from './Song'

class SpotifySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            SongArray: []
        }
        this.createSongCard = this.createSongCard.bind(this)
    }

    createSongCard() {
        console.log(document.getElementsByClassName("Spotify-search-input")[0].value)
        let splitIndex = document.getElementsByClassName("Spotify-search-input")[0].value.indexOf(".com")
        let propsLeft = document.getElementsByClassName("Spotify-search-input")[0].value.substring(0, splitIndex + 5)
        let propsRight = document.getElementsByClassName("Spotify-search-input")[0].value.substring(splitIndex + 5)
        console.log(propsLeft + "embed/" + propsRight)
        console.log("https://open.spotify.com/embed/track/2gvlPqqngL3BppFCwLXnVc")
        if (document.getElementsByClassName("Spotify-search-input")[0].value.length != 0) {
            this.setState({
                SongArray: this.state.SongArray.push(<Song url={document.getElementsByClassName("Spotify-search-input")[0].value} />)
            })
        }
        console.log(this.state.SongArray.length)
    }

    render() {
        return (
            <div>
                <div className="Spotify-search">
                    <div className="Spotify-search-bar">
                        <label htmlFor="Spotify-search-text">Search Spotify: </label>
                        <input className="Spotify-search-input" type="text" id="Spotify-search-text" name="Spotify-search-text" onChange={this.createSongCard} />
                    </div>
                    {/*<div className="Spotify-search-result">
                    </div>
                    <div className="Spotify-search-result">
                    </div>
                    <div className="Spotify-search-result">
                    </div>
                    <div className="Spotify-search-result">
                    </div>
                    <div className="Spotify-search-result">
                    </div>*/}
                </div>
                <div style={{ position: `absolute`, width: `500px`, height: `500px`, top: `200px`, left: `400px`, backgroundColor: `red` }}>
                    {this.SongArray}
                </div>
            </div>
        );
    }
}

export default SpotifySearch;
