// Summary: This file contains all login actions used in all modules.
// Created: 11/11/2019 12:00 PM - VS (IN)
import * as types from '../action-types';

//fetchTokenSuccess() action will be used when token successfully thrown from fetchToken() function.
// Created: 11/11/2019 12:00 pM - VS (IN)
export function fetchTokenSuccess(token) {
    return {
        type: types.FETCH_TOKEN_SUCCESS,
        payload: token
    }
}

// clearLoginToken() action will be used to clear token.
// Created: 11/19/2019 12:00 pM - VS (IN)
export function clearLoginToken( access_token, expires_in, id_token, scope, token_type ){
    return {
        type: types.CLEAR_LOGIN_TOKEN,
        access_token,
        expires_in,
        id_token,
        scope,
        token_type
    }
}

// setNewLoginProperty() action will be used to set values for textInputs.
// Created: 11/19/2019 12:00 pM - VS (IN)
export const setNewLoginProperty = (propertyName, value) => {
    return {
        type: types.SET_NEW_LOGIN_PROPERTY,
        propertyName,
        value
    };
};


// setNewLoginProperty() action will be used to clear values for textInputs.
// Created: 11/19/2019 12:00 pM - VS (IN)
export const clearLoginProperty = (email, password) => {
    return {
        type: types.CLEAR_LOGIN_PROPERTY,
        email,
        password
    };
};

