import { authAPI } from '../api/api';

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER':
            return {
            ...state,
            ...action.data,
        }
        default: return state;
    }
}

export const authUserAC = (id, login, email, isAuth) => ({type: 'SET-AUTH-USER', data: {id, login, email, isAuth}})

export const authThunk = () => {
    return (dispatch) => {
        return authAPI.auth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(authUserAC(id, login, email, true));
            }
        })
    }
}

export const loginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunk());
            }
        })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserAC(null, null, null, false));
            }
        })
    }
}



export default authReducer;