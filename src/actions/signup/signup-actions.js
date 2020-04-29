// Summary: This file contains all signup actions used in all modules.
// Created: 11/11/2019 12:00 PM - VS (IN)
import * as types from '../action-types';

//fetchTokenSuccess() action will be used when token successfully thrown from fetchToken() function.
// Created: 11/11/2019 12:00 pM - VS (IN)
export function signUpAction(obj) {
    return {
        type: types.SIGN_UP_SUCCESS,
        payload: obj
    }
}

// setNewSignUpProperty() action will be used to set values for textInputs.
// Created: 11/19/2019 12:00 pM - VS (IN)
export const setNewSignUpProperty = (propertyName, value) => {
    return {
        type: types.SET_NEW_SIGNUP_PROPERTY,
        propertyName,
        value
    };
};

// clearSignUpProperty() action will be used to clear values for textInputs.
// Created: 11/19/2019 12:00 pM - VS (IN)
export const clearSignUpProperty = (firstName, lastName, userName, email, password, phoneNumber) => {
    return {
        type: types.CLEAR_SIGN_UP_PROPERTY,
        firstName, 
        lastName, 
        userName,
        email,
        password,
        phoneNumber
    };
};

export const termConditionChanged = (text) => {
    return {
        type: types.TERM_CONDITION_CHANGED,
        payload: text
    };
};
