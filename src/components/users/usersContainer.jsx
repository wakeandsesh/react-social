import { connect } from 'react-redux';
import Users from './users';
import React from 'react';
import Preloader from '../common/preloader';
import { setCurrentPageAC } from '../../redux/usersReducer';
import { setUserAC } from '../../redux/usersReducer';
import { getTotalUsersCountAC } from '../../redux/usersReducer';
import { toggleFetchingAC } from '../../redux/usersReducer';
import { toggleFollowingAC } from '../../redux/usersReducer';
import { followAC } from '../../redux/usersReducer';
import { getUsersThunk, onCurrentPageThunk } from '../../redux/usersReducer';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    onCurrentPage = (page) => {
        this.props.onCurrentPageThunk(page, this.props.pageSize);
    }

    render () {
        return (
        <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                onCurrentPage={this.onCurrentPage}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.followAC}
                setUser={this.props.setUserAC}
                totalUsersCount={this.props.totalUsersCount }
                setCurrentPage={this.props.setCurrentPageAC}
                followButton={this.props.followButton}
                toggleFollowing={this.props.toggleFollowingAC}
            />
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followButton: state.usersReducer.followButton,
    }
}

export default connect(mapStateToProps, {
    followAC, setUserAC, setCurrentPageAC, getTotalUsersCountAC, toggleFetchingAC, toggleFollowingAC, getUsersThunk,
    onCurrentPageThunk
})(UsersContainer);