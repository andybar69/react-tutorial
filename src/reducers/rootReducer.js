const initState= {
    auth: [],
    posts: [
        {id: 1, title: 'Test 1', body: ''},
        {id: 1, title: '', body: ''},
        {id: 1, title: '', body: ''},
        {id: 1, title: '', body: ''},
        {id: 1, title: '', body: ''},
    ]
};

const rootReducer = (state = initState, action) => {
    return state;
};


export default rootReducer;
