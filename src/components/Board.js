import React from 'react'
import './Board.css'
import Article from './Article'
import Spotify from './Spotify'
import Video from './Video'
import sample_img from '../assets/sample.jpg'
import Forminput from './Form'

/* 
 * Make input box; make article card based on input
 * Set position of article card based on mouse click
 * Drag & drop
*/

let mouseX = 0
let mouseY = 0
let changeXY = true

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            itemArray: []
        };
        this.submitForm = this.submitForm.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    addArticle() {
        this.setState({
            itemArray: this.state.itemArray.concat([
                <Article title="Sample Title" author="Sample Author" notes="Sample Notes" key={this.state.itemArray.length}>
                    <img src={sample_img} alt="White rabbit sitting in green grass" style={{ maxWidth: `100%` }} />
                </Article>
            ])
        })
    }

    submitForm(values) {
        console.log(values)
        let link = values[0]
        let upload = values[1]
        let text = values[2]
        let tag = values[3]
        // Need to implement this more robustly in the future
        if (link.includes("spotify")) {
            this.setState({
                itemArray: this.state.itemArray.concat([
                    <Spotify url={link} x={mouseX} y={mouseY} />
                ])
            })
        } else if (link.includes("youtube")) {
            this.setState({
                itemArray: this.state.itemArray.concat([
                    <Video url={link} x={mouseX} y={mouseY} />
                ])
            })
        }
    }

    toggle(e) {
        if (e.target.tagName === "BUTTON") {
            this.setState({
                showForm: false
            });
            changeXY = true
        } else {
            this.setState({
                showForm: true
            });
            if (changeXY) {
                mouseX = e.clientX
                mouseY = e.clientY
                console.log(mouseX)
                console.log(mouseY)
                changeXY = false
            }
            
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="Board" onClick={this.toggle}>
                <div>
                    {this.state.showForm ?
                        <Forminput
                            closeForm={this.toggle}
                            submitForm={this.submitForm}
                        />
                        : null
                    }
                </div>
                {this.state.itemArray}
            </div>
        );
    }
}

export default Board;
