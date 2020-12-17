import React from 'react'
import './Video.css'
import Youtube from './Youtube'

class YoutubeSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            YoutubeArray: []
        }
        this.createYoutubeCard = this.createYoutubeCard.bind(this)
    }

    createYoutubeCard() {
        let input = document.getElementsByClassName("Youtube-search-input")[0].value
        if (input.length != 0) {
            this.setState({
                YoutubeArray: this.state.YoutubeArray.concat([<Youtube key={this.state.YoutubeArray.length} url={input} />])
            })
        }
        console.log(this.state.YoutubeArray.length)
    }

    render() {
        return (
            <div>
                <div className="Youtube-search">
                    <div className="Youtube-search-bar">
                        <label htmlFor="Youtube-search-text">Search Youtube: </label>
                        <input className="Youtube-search-input" type="text" id="Youtube-search-text" name="Youtube-search-text" onChange={this.createYoutubeCard} />
                    </div>
                </div>
                <div style={{ position: `absolute`, width: `500px`, height: `500px`, top: `200px`, left: `400px`, backgroundColor: `red` }}>
                    {this.state.YoutubeArray}
                </div>
            </div>
        );
    }
}

export default YoutubeSearch;
