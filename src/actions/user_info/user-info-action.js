// Summary: This file contains all user-info actions used in all modules.
// Created: 11/14/2019 12:00 PM - NS (IN)
import * as types from '../action-types';
//fetchUserInfoSuccess() action will be used when user info is successfully fetched from getUserInfo() function.
// Created: 11/14/2019 12:00 PM - NS (IN)
export function fetchUserInfoSuccess(userInfo) {
    return {
        type: types.USER_INFO_SUCCESS,
        payload: userInfo
    }
}