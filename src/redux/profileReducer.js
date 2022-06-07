import { profileAPI } from '../api/api';

let initialState = {
    posts: [
        {message: 'Sykaaaa', image: 'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg'},
        {message: 'Sykaaaa', image: 'https://www.vzglyad.kg/wp-content/uploads/2020/12/1609319491_Random-Flick-the-Wii-U-its-time-for-some-Banjo-Kazooie.jpg'},
        {message: 'Sykaaaa', image: 'http://pm1.narvii.com/7251/8351b68fb8082f8d36d59243cb0ac8e940b524f9r1-540-451v2_uhq.jpg'},
        {message: 'Sykaaaa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8KEUvIC-_BvQ6LngGUjLyEjLb8pebOOys8YSB_Zm2IQvjgfdM6cENUfcT2SwNQVijXM&usqp=CAU'},
    ],
    profile: null,
    status: 'sdsdsdsd',
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 0,
                message: action.message,
                image: 'tralala'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
        }
}

export const setUserProfileAC = (profile) => ({type: 'SET-USER-PROFILE', profile: profile});
export const setStatusAC = (status) => ({type: 'SET-STATUS', status});

export const setProfileThunk = (router) => {
    return (dispatch) => {
        let userID = router;
        profileAPI.setProfile(userID).then(response => {
            dispatch(setUserProfileAC(response.data));
        });
    }
}

export const getStatusThunk = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID).then(response => {
            dispatch(setStatusAC(response.data));
        })
    }
}

export const setStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
    }
}

export default profileReducer;