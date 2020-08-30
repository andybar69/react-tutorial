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
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                auth: {
                    status: true,
                    firstName: action.firstName,
                    lastName: action.lastName
                }
            }
            break;

        case 'LOGOUT_USER':
            return {
                ...state,
                auth: {
                    status: false,
                    firstName: '',
                    lastName: ''
                }
            }
            break;

        default:
            return state; break;
    }
};

export default authReducer;
