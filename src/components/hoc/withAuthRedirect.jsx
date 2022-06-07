import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

let mapStateToRedirect = (state) => ({
    isAuth: state.authReducer.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Navigate to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToRedirect)(RedirectComponent);
    return ConnectedRedirectComponent;
}