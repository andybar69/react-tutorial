const initState = {
    users: [],
    auth: {
        status: false,
        firstName: '',
        lastName: ''
    }
};

const authReducer = (state = initState, action) => {
    console.log(action);
    return state;
};

export default authReducer;
