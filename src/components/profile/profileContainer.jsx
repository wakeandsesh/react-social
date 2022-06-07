import Profile from './profile';
import { connect } from 'react-redux';
import React from 'react';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { setProfileThunk, setUserProfileAC, getStatusThunk, setStatusThunk } from '../../redux/profileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.router.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserId;
            if (!userID) {
                this.props.history.push('/login')
            }
        }
        this.props.setProfileThunk(userID);
        this.props.getStatusThunk(userID);
    }

    render () {
        return (
            <Profile {...this.props} />
        )
    }
    
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    profilePage: state.profileReducer,
    authorizedUserId: state.authReducer.id,
})

export default compose(
    connect(mapStateToProps, {
        setProfileThunk, setUserProfileAC, getStatusThunk, setStatusThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)