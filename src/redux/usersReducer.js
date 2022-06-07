import { usersAPI } from '../api/api'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followButton: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                    }
                    return u;
                })
            }
        }
        case 'SET_USER': {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case 'SET_CURRENTPAGE': {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case 'GET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case 'TOGGLE_FETCHING' : {
            return {
                ...state,
                isFetching: action.status
            }
        }
        case 'TOGGLE_FOLLOW_PROGRESS' : {
            return {
                ...state,
                followButton: action.status
            }
        }
        default: return state;
    }
}

export const toggleFetchingAC = (status) => ({type: 'TOGGLE_FETCHING', status: status});
export const setUserAC = (users) => ({type: 'SET_USER', users: users});
export const getTotalUsersCountAC = (count) => ({type: 'GET_TOTAL_USERS_COUNT', count: count});
export const setCurrentPageAC = (page) => ({type: 'SET_CURRENTPAGE', page: page});
export const followAC = (userID) => ({type: 'TOGGLE_FOLLOW', userID: userID});
export const toggleFollowingAC = (status) => ({type: 'TOGGLE_FOLLOW_PROGRESS', status: status});

export const getUsersThunk = (pageSize, currentPage) => {
    return (dispatch) => {
            dispatch(toggleFetchingAC(true));
            usersAPI.getUsers(pageSize, currentPage).then(response => {
                dispatch(toggleFetchingAC(false));
                dispatch(setUserAC(response.data.items));
                dispatch(getTotalUsersCountAC(response.data.totalCount));
            })
    }
}

export const onCurrentPageThunk = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(page));
        dispatch(toggleFetchingAC(true));
        usersAPI.onCurrentPage(pageSize, page).then(response => {
                dispatch(toggleFetchingAC(false));
                dispatch(setUserAC(response.data.items));
            })
    }
}





export default usersReducer;