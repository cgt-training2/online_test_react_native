// Summary: This file contains getUserInfo function which calls UserInfoApi API and dispatch response to the action.
// Created: 11/11/2019 12:00 PM - VS (IN)
import { Alert } from 'react-native';
import { auth0,UserInfoApi } from '../../enums/global-constants';
import { fetchUserInfoSuccess } from './user-info-action';
import { fetchOptionsGet, parseJSON } from '../../utils/fetch/fetch-options';

// getUserInfo function get the user info and response is dispatched to the fetchUserInfoSuccess.
// Created: 11/14/2019 12:00 PM - NS (IN) 
export function getUserInfo(token) {
    if (token) {
        return (dispatch) => {
            return fetch(UserInfoApi,fetchOptionsGet(token))
            .then(res => parseJSON(res))
            .then(res => {
                //console.log(res);
                if(res.name){
                    dispatch(fetchUserInfoSuccess(res));
                    return res;
                }
                return res;
            })
            .catch(err => {
                console.log(err)
                Alert.alert("There may be internet connection problem from UserInfo")
            })
        }                
    } else {
        return dispatch => {
            dispatch(fetchUserInfoSuccess('Not Found'));
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
