// Summary: This file provides util methods used in authentication and sign up operations.
// Created: 11/18/2019 10:11 PM - VS (IN)

// Utils
import { isValidString } from '../validation/value-validation';

// Summary: This function returns a login object.
// Created: 11/18/2019 10:12 PM - VS (IN)
export const getLogin = (email, password) => {

    return {
        email: isValidString(email) ? email : "",
        password: isValidString(password) ? password : ""
    };
};

// Summary: This function returns a signUp object.
// Created: 11/18/2019 10:12 PM - VS (IN)
export const getSignUp = (firstName, lastName, userName, email, password, phoneNumber) => {

    return {
        firstName: isValidString(firstName) ? firstName : "",
        lastName: isValidString(lastName) ? lastName : "",
        userName: isValidString(userName) ? userName : "",
        email: isValidString(email) ? email : "",
        password: isValidString(password) ? password : "",        
        phoneNumber: isValidString(phoneNumber) ? phoneNumber : ""
    };
};

// Summary: This function returns a token object after user loggedIn.
// Created: 11/18/2019 10:12 PM - VS (IN)
export const getLoginToken = (access_token, expires_in, id_token, scope, token_type) => {

    return {
        access_token: isValidString(access_token)  ? access_token: "",
        expires_in: expires_in > 0 ? expires_in: 0,
        id_token: isValidString(id_token)  ? id_token: "",
        scope: isValidString(scope)  ? scope: "",
        token_type: isValidString(token_type)  ? token_type: ""
    };
};

// Summary: This function returns a blank errors objects used in login module.
// Created: 11/18/2019 10:15 PM - VS (IN)
export const getBlankLoginErrors = () => {
    return {
        login: {
            email: [],
            password: []
        },
        signUp: {
            email: [],
            password: [],
            firstName: [],
            lastName: [],
            userName: [],
            phoneNumber: [],
            tncChecked: []

        }
    };
};


