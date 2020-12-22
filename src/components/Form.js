import React from 'react';
import './Form.css'
import { Formik, Field } from 'formik';

class Forminput extends React.Component {
     validateForm() {
        console.log('hi')
        let error
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if (!!pattern.test(document.getElementById("link").value) === false) {
            error = "Please enter a valid link"
        } else {
            error = "None"
        }
        console.log(error)  
        
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
        console.log(count)
    }
    
    render() {
        return (
            <div className='Form'>
                <div className='Form_inner'>
                    <button type="button" className="closeX" onClick={this.props.closeForm}>x</button>
                    <h1>add new item</h1>
                    <Formik
                        initialValues={{
                            link: "",
                            upload: "",
                            tags: ""
                        }}
                        defaultValue={{
                            text: ""
                        }}
                        /*onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}*/
                        validator={() => ({})}
                    >
                        <form>
                            <div id="row">
                                <p>link</p>
                                <Field name="link" id="link" type="text"/>
                            </div>
                            <div>
                                <p>upload</p>
                                <input name="upload" type="file"></input>
                            </div>
                            <div>
                                <p>text</p>
                                <Field name="text" as="textarea" className="formtextarea" contenteditable="true" onChange={this.handleText}/>

                            </div>
                            <div>
                                <p>tags</p>
                                <Field name="tags" as="select" className="my-select">
                                    <option value="blue">blue</option>
                                    <option value="red">red</option>
                                    <option value="yellow">yellow</option>
                                </Field>
                            </div>
                            <button type="submit" onClick={ () => this.props.submitForm([
                                document.getElementsByName("link")[0].value,
                                document.getElementsByName("upload")[0].value,
                                document.getElementsByName("text")[0].value,
                                document.getElementsByName("tags")[0].value
                            ]) }>done!</button>
//                             <onClick={this.validateForm}
//                             <p id="erroronClick={this.validateFormMessage" style={{ display: `none` }}></p>
                        </form>
                    </Formik>
                </div>
            </div >
        );
    }
}

export default Forminput;
