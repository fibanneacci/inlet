import React from 'react'
import './Form.css'
// import { Formik, Form, Field, ErrorMessage } from 'formik';

class Form extends React.Component {
    render() {
        return (
            <div className='Form'>
                <div className='Form_inner'>
                    <button className="closeX" onClick={this.props.closeForm}>x</button>
                    <h1>{this.props.text}</h1>
                    <button className="closeButton" onClick={this.props.closeForm}>Done!</button>
                </div>
            </div>
        );
    }
}

// const Basic = () => (
//     <div>
//       <h1>Any place in your app!</h1>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validate={values => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = 'Required';
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = 'Invalid email address';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );

export default Form;
