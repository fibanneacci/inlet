import React from 'react';
import './Form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class Forminput extends React.Component {
    render() {
        return (
            <div className='Form'>
                <div className='Form_inner'>
                    <button className="closeX" onClick={this.props.closeForm}>x</button>
                    <h1>{this.props.text}</h1>
                    <Formik
                        initialValues={{ 
                            link: "", 
                            upload: "",
                            text: "",
                            tags: "" 
                        }}
                        onSubmit={values => {
                            setTimeout(() => {
                            this.onFormSubmit(values);
                            }, 400);
                        }}

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

                        render={({
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        }) => (
                            <Form>
                                <div id="row">
                                <p>link</p>
                                <Field name="link" type="text"/>
                                </div>
                                <div>
                                <p>upload</p>
                                <Field name="upload" as="select" className="my-select">
                                    <option value="red">blue</option>
                                </Field>
                                </div>
                                <div>
                                <p>text</p>
                                <Field name="text" as="textarea" className="formtextarea"/>
                                </div>
                                <div>
                                <p>tags</p>
                                <Field name="tags" as="select" className="my-select">
                                    <option value="blue">blue</option>
                                    <option value="red">red</option>
                                    <option value="yellow">yellow</option>
                                </Field>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="closeButton"
                                    onClick={this.props.closeForm}
                                >done!
                                </button>
                            </Form>
                            /* {{} </Form>
                            <Form onSubmit={handleSubmit}>
                                <h3>Enter login info</h3>
                                <div>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                </div>
                                <div>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                                </div> }*/
                        )}
                        />
                    </div>
            </div>
        );
    }
}

export default Forminput;
