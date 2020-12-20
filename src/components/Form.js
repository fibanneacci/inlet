import React from 'react';
import './Form.css'
import { Formik, Field } from 'formik';

class Forminput extends React.Component {
    validateForm() {
        console.log('hi')
        let error;
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        if (!!pattern.test(document.getElementById("link").value) == false) {
            error = "Please enter a valid link"
        } else {
            error = "None"
        }
        console.log(error)  

        if (error != "None") {
            document.getElementById("errorMessage").value = error
            document.getElementById("errorMessage").style.visibility = "visible"
        }
    }

    textLength() {
        if (document.getElementById("link").value.length >= 2) {
            return 'over'
        } 
        console.log(document.getElementById("link").value)
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
                            text: "",
                            tags: ""
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
                                <Field name="text" as="textarea" className="formtextarea" onChange={this.onChange}/>

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
//                             <p id="erroronClick={this.validateFormMessage" style={{ visibility: `hidden` }}></p>
                        </form>
                    </Formik>
                </div>
            </div >
        );
    }
}

export default Forminput;
