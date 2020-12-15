import React from 'react'
import './Board.css'
import Article from './Article'
import sample_img from './sample.jpg'

/* 
 * Make input box; make article card based on input
 * Set position of article card based on mouse click
 * Drag & drop
*/

class Board extends React.Component {
    state = {
        ArticleArray: []
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

    render() {
        return (
            <div className="Board" onClick={() => this.addItem()}> {/* Later: get mouse click location */}
                {this.state.ArticleArray}
            </div>
        );
    }
}

export default Board;
