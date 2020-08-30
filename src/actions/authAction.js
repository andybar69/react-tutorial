export const loginUser = (firstName, lastName, status) => {
    return {
        type: "LOGIN_USER",
        firstName: firstName,
        lastName: lastName,
        status: status
    }
};

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER"
    }
};
