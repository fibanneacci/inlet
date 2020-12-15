import React from 'react'
import './Board.css'
import Article from './Article'
import sample_img from './sample.jpg'
import Form from './Form'

/* 
 * Make input box; make article card based on input
 * Set position of article card based on mouse click
 * Drag & drop
*/

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showForm: true, 
            ArticleArray: []
        };
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

    toggleForm() {
        this.setState({  
            showForm: !this.state.showForm
        });  
        console.log(this.state.showForm)
    }  

    render() {
        return (
            <div>
            <div onClick={() => this.toggleForm.bind(this)}>
                {this.state.showForm ?  
                    <Form  
                        text='Click "Close Button" to hide popup'  
                        closeForm={this.toggleForm.bind(this)}  
                    />  
                : null  
                }  
            </div>
            {/* <div className="Board" onClick={() => this.addItem()}> Later: get mouse click location */}
                {/* {this.state.ArticleArray}
            </div>   */}
            </div> 
        );
        }
        
}

export default Board;