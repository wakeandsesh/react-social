import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;