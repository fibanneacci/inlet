import React from 'react';
import './Form.css'
import { Formik, Field } from 'formik';

class Forminput extends React.Component {
    validateForm() {
        let error
        if (error !== "None") {
            document.getElementById("errorMessage").value = error
            document.getElementById("errorMessage").style.display = "block"
        }
    }

    handleText() {
        var text = document.getElementById("text").value
        console.log(text)
        var wordRegex = /[^a-z\d\s]+/gi;
        var wordCounter = (text.trim()//remove whitespace
            .replace(/[\W]+/g, ' ')
            .replace(/([a-z]+)\b[.,]/g, '')//remove commas & fullstops
            .replace(wordRegex, '')
            .split(' ')// split words into array elements
            .filter(function(x){// remove empty array eements
        return x !== '';
        }) || []);
        let count
        count = wordCounter.length
        if(count > 1) {
            let wordError = ""
            wordError = wordError.concat(count)
            wordError = wordError.concat("/700 Words")
            document.getElementById("wordError").innerHTML = wordError
        }
    }
    
    render() {
        return (
            <div className='Form'>
                <div className='Form_inner'>
                    <button type="button" className="closeX" onClick={this.props.closeForm}>x</button>
                    <h1 id="addNew">add new item</h1>
                    <Formik
                        initialValues={{
                            link: "",
                            upload: "",
                            tags: ""
                        }}
                        defaultValue={{
                            text: ""
                        }}
                        validator={() => ({})}
                    >
                        <form>
                            <div id="row">
                                <p>link</p>
                                <Field id="link" name="link" id="link" type="text"/>
                            </div>
                            <div>
                                <p>upload</p>
                                <input id="upload" name="upload" type="file"></input>
                            </div>
                            <div>
                                <p>text</p>
                                <Field id="text" name="text" as="textarea" className="formtextarea" onChange={this.handleText}/>
                                <div id ="wordError" style={{ display: "block" }}></div>
                            </div>
                            <div>
                                <p>tags</p>
                                <Field id= "tags" name="tags" as="select" className="my-select">
                                    <option value="blue">blue</option>
                                    <option value="red">red</option>
                                    <option value="yellow">yellow</option>
                                </Field>
                            </div>
                            <button id= "closeButton" type="submit" onClick={ () => this.props.toggle}>done!</button>
                            <div id="errorMessage" style={{ display: "block" }}></div>
                        </form>
                    </Formik>
                </div>
            </div >
        );
    }
}

export default Forminput;
