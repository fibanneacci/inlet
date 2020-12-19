import React from 'react';
import './Form.css'
import { Formik, Field } from 'formik';

class Forminput extends React.Component {
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
                                <Field name="link" type="text" />
                            </div>
                            <div>
                                <p>upload</p>
                                <Field name="upload" as="select" className="my-select">
                                    <option value="blue">blue</option>
                                </Field>
                            </div>
                            <div>
                                <p>text</p>
                                <Field name="text" as="textarea" className="formtextarea" />
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
                        </form>
                    </Formik>
                </div>
            </div >
        );
    }
}

export default Forminput;



// validation code for future reference
// validate={values => {
//     let errors = {};
//     if (!values.email) {
//     errors.email = "Required";
//     } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//     errors.email = "Invalid email address";
//     }
//     return errors;
// }}