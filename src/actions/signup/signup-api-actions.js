// Summary: This file contains performSignup function which calls signup API and dispatch response to the action.
// Created: 11/11/2019 12:00 PM - VS (IN)

import { Alert } from 'react-native';
import { auth0,SignupApi,DB_CONNECTION_NAME } from '../../enums/global-constants';
import { signUpAction } from './signup-actions';
import { fetchOptionsPost,parseJSON } from '../../utils/fetch/fetch-options';

// performSignup function performs the signup and response is dispatched to the signUpAction.
// Created: 11/11/2019 12:00 pM - NS (IN)
 
export function performSignup(username, email, password, phone_number,given_name,family_name) {
    const postData = {
        client_id: auth0.clientId,
        email: email,
        password: password,
        connection: DB_CONNECTION_NAME,
        username: username,
        name: given_name + " " + family_name ,
        phone_number: phone_number,
        user_metadata: { given_name: given_name, family_name: family_name }
    };
    if (email) {
        return (dispatch) => {
            return fetch(SignupApi,fetchOptionsPost(postData))
            .then(res => parseJSON(res))
            .then(res => {
                if(res._id){
                    dispatch(signUpAction(res));
                    return res;
                }
                return res;
            })
            .catch(err => {
                console.log(err)
                Alert.alert("There may be internet connection problem")
            })
        }                
    } else {
        return dispatch => {
            dispatch(signUpAction('Not Logged In'));
        }
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
