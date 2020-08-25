export const loginUser = (firstName, lastName, status) => {
    return {
        type: "LOGIN_USER",
        firstName: firstName,
        lastName: lastName,
        status: status
    }
};
