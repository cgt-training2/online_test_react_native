// Summary: Reducers for the login functanality the state will be created based on the data provided by FETCH_TOKEN_SUCCESS action.
// Created: 11/10/2019 11:08 AM - VS (IN)
// import 'babel-polyfill';
import * as types from '../actions/action-types';
import { getBlankLoginErrors } from '../utils/login/login-utils'; // Here, I imported the blank errors from login because in this sample code, that's the only module I have. In real life, the blank errors would come from the Utils function for that particular moddule.


const INITIAL_STATE = { 
  email: '', 
  password: '',
  tokenObject: '',
  errors: JSON.parse(JSON.stringify(getBlankLoginErrors(null, null))) 
};
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload }; 
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case types.SET_ERRORS :
        return Object.assign({}, state, {
            errors: action.errors
        })
    case types.CLEAR_ERRORS :
        return Object.assign({}, state, {
            errors: JSON.parse(JSON.stringify(getBlankLoginErrors(null, null)))
        })
    case types.FETCH_TOKEN_SUCCESS:
            return { ...state, tokenObject: action.payload };
    default:
      return state;
  }
};