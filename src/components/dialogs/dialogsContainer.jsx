import { connect } from 'react-redux';
import Dialogs from './dialogs';
import './dialogs.css'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsReducer: state.dialogsReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (message) => {
            dispatch({type: 'SEND-MESSAGE', message});
        },
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)

