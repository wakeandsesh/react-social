import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Sykaaaa', image: 'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg'},
                {message: 'Sykaaaa', image: 'https://www.vzglyad.kg/wp-content/uploads/2020/12/1609319491_Random-Flick-the-Wii-U-its-time-for-some-Banjo-Kazooie.jpg'},
                {message: 'Sykaaaa', image: 'http://pm1.narvii.com/7251/8351b68fb8082f8d36d59243cb0ac8e940b524f9r1-540-451v2_uhq.jpg'},
                {message: 'Sykaaaa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8KEUvIC-_BvQ6LngGUjLyEjLb8pebOOys8YSB_Zm2IQvjgfdM6cENUfcT2SwNQVijXM&usqp=CAU'},
            ],
            postTextValue: ''
        },
        messagesPage: {
            messagesTextValue: '',
            dialogs: [
                {id: '1', profileImage: 'dsds', name: 'sdsdsd'}
            ],
            messages: [
                {id: 1, message: 'Yoooo'}
            ]
        },
    },
    _subscribe(observer) {
        this.rerenderTree = observer;
    },

    getState() {
        return this._state;
    },
    rerenderTree(state){},
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this.rerenderTree(this._state);
    }

}

export default store;