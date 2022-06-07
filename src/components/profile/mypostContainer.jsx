import { connect } from 'react-redux';
import MyPost from './mypost';

let mapStateToProps = (state) =>{
    return {
        profilePage: state.profileReducer,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        postSubmit: (message) => {
            dispatch({type: 'ADD-POST', message});
        }
    }
} 

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;