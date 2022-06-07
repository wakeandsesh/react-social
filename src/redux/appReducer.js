import { authThunk } from './authReducer'

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state;
    }
}

const setInitializeAC = () => ({type: 'SUCCESS_INITIALIZED'});

export const initializeThunk = () => async (dispatch) => {
    await dispatch(authThunk());
    dispatch(setInitializeAC());
}


export default appReducer;