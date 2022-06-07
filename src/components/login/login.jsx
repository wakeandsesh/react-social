import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { loginThunk } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';



const LoginForm = (props) => {
    let ValidationSchema = yup.object({
        email: yup.string().email('Введите корректный адрес электронной почты').required('Это поле обязательно для ввода.'),
        password: yup.string().required('Это поле обязательно для ввода.'),
    })

    let renderError = (message) => {
        return (
            <div style={{color: 'red', margin: '10px 0 10px'}}>{message}</div>
        )
    }

    return (
        <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        onSubmit={props.onSubmit}
        validationSchema={ValidationSchema}
        >
            <Form>
                <div>
                    <Field id='email' name='email' type='input' />
                    <ErrorMessage name='email' render={renderError} />
                </div>

                <div>
                    <Field id='password' name='password' type='password' />
                    <ErrorMessage name='password' render={renderError} />
                </div>

                <div>
                    <Field id='rememberMe' name='rememberMe' type='checkbox' />
                </div>

                <button type='submit'>Send</button>
            </Form>
        </Formik>
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Pizdaaaa</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, { loginThunk })(Login);