// Summary: This file contains fetchLoginAccessToken function which calls login API and dispatch response to the action.
// Created: 11/11/2019 12:00 PM - VS (IN)
import { Alert } from 'react-native';
import { auth0 } from '../../enums/global-constants';
import { fetchTokenSuccess } from './login-actions'; 
import { fetchOptionsPost,parseJSON } from '../../utils/fetch/fetch-options';

//fetchLoginAccessToken() function used to fetch token object from API and dispatch that data using fetchTokenSuccess action.
// Created: 11/11/2019 12:00 pM - VS (IN)

export function fetchLoginAccessToken(email, password) {
    const postData = {
        grant_type: "password",
        username: email,
        password: password,
        scope: "openid",
        client_id: auth0.clientId,
        client_secret: auth0.client_secret
    };
    if(email){
        return dispatch => { 
            return fetch('https://'+auth0.domain+'/oauth/token',fetchOptionsPost(postData))
            .then(res => parseJSON(res))
            .then(res => {
                if(res.access_token){
                    dispatch(fetchTokenSuccess(res));
                    return res;
                }
                return res;
            })
            .catch(err => {
                // console.log(err)
                Alert.alert("There may be internet connection problem")
            })
        }
    }else{
        return dispatch => { 
            dispatch(fetchTokenSuccess('Not Logged In'));
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
