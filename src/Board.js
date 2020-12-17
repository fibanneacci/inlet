import React from 'react'
import './Board.css'
import Article from './Article'
import sample_img from './sample.jpg'
import Forminput from './Form'
import SpotifySearch from './Spotify'

/* 
 * Make input box; make article card based on input
 * Set position of article card based on mouse click
 * Drag & drop
*/

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            ArticleArray: []
        };
        this.toggle = this.toggle.bind(this)
    }

    addItem() {
        this.setState({
            ArticleArray: this.state.ArticleArray.concat([
                <Article title="Sample Title" author="Sample Author" notes="Sample Notes" key={this.state.ArticleArray.length}>
                    <img src={sample_img} alt="White rabbit sitting in green grass" style={{ maxWidth: `100%` }} />
                </Article>
            ])
        })
    }

    toggle(e) {
        if (e.target.tagName === "BUTTON") {
            this.setState({
                showForm: false
            });
        } else {
            this.setState({
                showForm: true
            });
        }
    }

    render() {
        return (
            <div className="Board" onClick={this.toggle}>
                <SpotifySearch />
                <div>
                    {this.state.showForm ?
                        <Forminput
                            text='add new item'
                            closeForm={this.toggle}
                        />
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Board;
