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
        this.close = this.close.bind(this)
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

    submitForm() {

        let error = []
        let link = document.getElementsByName("link")[0].value
        let upload = document.getElementsByName("upload")[0].value
        let text = document.getElementsByName("text")[0].value
        let textLength = document.getElementById("wordError").innerHTML
        let tag = document.getElementsByName("tags")[0].value

        // check submit 1 field 
        if(!((link.length > 0 && !upload && text.length===0) || (link.length === 0 && upload && text.length===0) || (link.length === 0 && !upload && text.length > 0))) {
            error.push("Please submit 1 field")
        }

        // check submit valid link

        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if (link.length > 0 && !!pattern.test(link) === false) {
            error.push("Please enter a valid link")
        } 

        console.log(textLength)
        let index = textLength.indexOf('/')
        let num = parseInt(textLength.substring(0, index))
        if (num > 2) {
            error.push("Please enter fewer than 700 words")
        }

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

        return error
    }

    toggle(e) {
        if (e.target.tagName === "BUTTON") {
            let error = this.submitForm()
            if (error.length === 0) {
                this.setState({
                    showForm: false
                });
                changeXY = true
            }
            else {
                let str = ""
                for (let i = 0; i < error.length; i++) {
                    str = str.concat(error[i])
                    str = str.concat("\n")
                }
                console.log(str)
                document.getElementById("errorMessage").innerHTML = str
            }
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

    close() {
        this.setState({
            showForm: false
        });
        changeXY = true
    }

    render() {
        return (
            <div className="Board" onClick={this.toggle}>
                <div>
                    {this.state.showForm ?
                        <Forminput
                            closeForm={this.close}
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