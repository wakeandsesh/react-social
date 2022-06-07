import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { authUserAC, authThunk, logoutThunk } from '../redux/authReducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps =(state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

export default connect(mapStateToProps, {
    authUserAC, authThunk, logoutThunk
})(HeaderContainer);