import React from 'react';
import './mypost.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';


const MyPost = (props) => {

    function postSubmit(values, {resetForm}) {
        props.postSubmit(values.message);
        resetForm({values: ''});
    }

    let ValidationSchema = yup.object({
        message: yup.string().max(150, 'Максимальное количество символов - 200. Вы превысили лимит.').min(1, 'Нельзя оставить сообщение пустым.')
    })

    let renderError = (message) => {
        return (
            <div style={{color: 'red', margin: '10px 0 10px'}}>{message}</div>
        )
    }

    return (
        <div className="mypost">
            <Formik
            initialValues={{message: ''}}
            onSubmit={postSubmit}
            validationSchema={ValidationSchema}
            >
                <Form>
                    <Field name='message' type='text' />
                    <ErrorMessage name='message' render={renderError} />
                    <button style={{marginLeft: '30px'}} type='submit'>Send message</button>
                </Form>
            </Formik>
        </div>
    )
}

export default MyPost;