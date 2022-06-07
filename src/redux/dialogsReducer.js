let initialState = {
    dialogs: [
        {id: '1', profileImage: 'dsds', name: 'sdsdsd'}
    ],
    messages: [
        {id: 1, message: 'Yoooo'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
            ...state,
            messages: [...state.messages, {id: 6, message: action.message}],
        };
        default: return state;
    }
}

export default dialogsReducer;