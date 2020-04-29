// Summary: This file contains all the reducers required for the login.
// Created: 11/09/2019 05:35 PM - VS (IN)
import * as types from '../actions/action-types';
import { getBlankLoginErrors, getLogin, getLoginToken } from '../utils/login/login-utils'; // Here, I imported the blank errors from login because in this sample code, that's the only module I have. In real life, the blank errors would come from the Utils function for that particular moddule.


const INITIAL_STATE = { 
  tokenObject: JSON.parse(JSON.stringify(getLoginToken("", 0, "", "", ""))),
  newLogin: JSON.parse(JSON.stringify(getLogin("", ""))),
  errors: JSON.parse(JSON.stringify(getBlankLoginErrors(null, null))) 
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    // Summary: This case will set state which contains value for textInput properties of login. 
    // Created: 11/19/2019 05:35 PM - VS (IN)
    case types.SET_NEW_LOGIN_PROPERTY:
      return Object.assign({}, state, {
          newLogin: Object.assign({}, state.newLogin, {
            [action.propertyName]: action.value
          })      
      })
    // Summary: This case will clear state which contains value for textInput properties of login. 
    // Created: 11/19/2019 05:35 PM - VS (IN)
    case types.CLEAR_LOGIN_PROPERTY:
      return Object.assign({}, state, {
          newLogin: JSON.parse(JSON.stringify(getLogin(action.email, action.password)))
        })  
    // Summary: This case will set state for valdation errors for textInput properties of login. 
    // Created: 11/19/2019 05:35 PM - VS (IN)  
  	case types.SET_ERRORS :
        return Object.assign({}, state, {
          errors: action.errors
        })
    // Summary: This case will clear state for valdation errors for textInput properties of login. 
    // Created: 11/19/2019 05:35 PM - VS (IN)  
    case types.CLEAR_ERRORS :
        return Object.assign({}, state, {
          errors: JSON.parse(JSON.stringify(getBlankLoginErrors(null, null)))
        })
    // Summary: This case will set state for token object which contains id_token and access_token.
    // Created: 11/19/2019 05:35 PM - VS (IN)  
    case types.FETCH_TOKEN_SUCCESS:
        return Object.assign({}, state, {
          tokenObject: Object.assign({}, state.tokenObject, {
              ["access_token"]: action.payload.access_token,
              ["expires_in"]: action.payload.expires_in,
              ["id_token"]: action.payload.id_token,
              ["scope"]: action.payload.scope,
              ["token_type"]: action.payload.token_type 
          })      
        })
    // Summary: This case will clear state for token object which contains id_token and access_token.
    // Created: 11/19/2019 05:35 PM - VS (IN)
    case types.CLEAR_LOGIN_TOKEN:
        return Object.assign({}, state, {
          tokenObject: JSON.parse(JSON.stringify(getLoginToken(action.access_token, action.expires_in, action.id_token, action.scope, action.token_type))),
        })        
    default:
      return state;
  }
};