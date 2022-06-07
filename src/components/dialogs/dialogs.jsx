import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import './dialogs.css'
import * as yup from 'yup';

const DialogUser = (props) => {

    return (
        <div className="dialog__user">
            <img src="https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text.png" alt="" />
            <NavLink to={props.path}><span>{props.name}</span></NavLink>
        </div>
    )
}

const DialogMessage = (props) => {

    return (
        <div className="dialog__message">
            <img src="https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text.png" alt="" />
            <span>{props.message}</span>
        </div>
    )
}

const Dialogs = (props) => {
    
    let state = props.dialogsReducer;
    let dialogs = state.dialogs.map((item, index) => <DialogUser name={item.name} path={item.id}/>);
    let messages = state.messages.map((item, index) => <DialogMessage message={item.message}/>);

    return (
        <div className="dialogs">
            <div className="dialogs__users">
                {dialogs}
            </div>
            <div className="dialogs__messages">
                {messages}
                <MessageForm onSendMessage={props.onSendMessage}/>
            </div>
        </div>
    )
}

const MessageForm = (props) => {

    let onSendMessage = (values, {resetForm}) => {
        props.onSendMessage(values.message);
        resetForm({values: ''});
    }

    let ValidateScheme = yup.object({
        message: yup.string().min(1, 'Нельзя оставить сообщение пустым').max(500, 'Достигнут лимит символов в одном сообщении').required('')
    })

    let renderError = (message) => {
        return (
            <div style={{color: 'red', margin: '10px 0 10px'}}>{message}</div>
        )
    }

    return (
        <div style={{}}>
            <Formik
            initialValues={{message: ''}}
            onSubmit={onSendMessage}
            validationSchema={ValidateScheme}
            >
                <Form>
                    <Field name='message' />
                    <ErrorMessage name='message' render={renderError} />
                    <button type='submit'>Send message</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Dialogs;