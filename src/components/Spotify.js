import React from 'react'
import './Spotify.css'
import Song from './Song'
import Podcast from './Podcast'

class SpotifySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            SongArray: []
        }
        this.createSpotifyCard = this.createSpotifyCard.bind(this)
    }

    createSpotifyCard() {
        let input = document.getElementsByClassName("Spotify-search-input")[0].value
        if (input.length != 0) {
            if (input.includes("episode")) { // podcast
                this.setState({
                    SongArray: this.state.SongArray.concat([<Podcast key={this.state.SongArray.length} url={input} />])
                })
            } else { // music
                this.setState({
                    SongArray: this.state.SongArray.concat([<Song key={this.state.SongArray.length} url={input} />])
                })
            }
        }
        console.log(this.state.SongArray.length)
    }

    render() {
        return (
            <div>
                <div className="Spotify-search">
                    <div className="Spotify-search-bar">
                        <label htmlFor="Spotify-search-text">Search Spotify: </label>
                        <input className="Spotify-search-input" type="text" id="Spotify-search-text" name="Spotify-search-text" onChange={this.createSpotifyCard} />
                    </div>
                </div>
                <div style={{ position: `absolute`, width: `500px`, height: `500px`, top: `200px`, left: `400px`, backgroundColor: `red` }}>
                    {this.state.SongArray}
                </div>
            </div>
        );
    }
}

export default SpotifySearch;
