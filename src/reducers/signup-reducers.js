// Summary: Reducers for the Signup functanality.
// Created: 11/10/2019 11:08 AM - VS (IN)
import * as types from '../actions/action-types';
import { getBlankLoginErrors, getSignUp } from '../utils/login/login-utils'; // Here, I imported the blank errors from login because in this sample code, that's the only module I have. In real life, the blank errors would come from the Utils function for that particular moddule.

// Reducers for the Signup functanality the state will be created based on the data provided by SIGN_UP_SUCCESS action.
// Created: 11/10/2019 11:08 AM - VS (IN)
const INITIAL_STATE = {
  tncChecked: false, 
  tokenObject: '',
  newSignUp: JSON.parse(JSON.stringify(getSignUp("", "", "", "", "", ""))),
  errors: JSON.parse(JSON.stringify(getBlankLoginErrors(null, null)))  
};

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
  	      
    case types.TERM_CONDITION_CHANGED:
      return Object.assign({}, state, {
        tncChecked: action.payload
      })

    // Summary: This case will set state for valdation errors for textInput properties of signup. 
    // Created: 11/19/2019 05:35 PM - VS (IN)  
    case types.SET_ERRORS :
      return Object.assign({}, state, {
        errors: action.errors
      })
    // Summary: This case will clear state for valdation errors for textInput properties of signup. 
    // Created: 11/19/2019 05:35 PM - VS (IN)  
    case types.CLEAR_ERRORS :
      return Object.assign({}, state, {
        errors: JSON.parse(JSON.stringify(getBlankLoginErrors(null, null)))
      })
    // Summary: This case will set state which contains value for textInput properties of signup. 
    // Created: 11/19/2019 05:35 PM - VS (IN)    
    case types.SET_NEW_SIGNUP_PROPERTY:
      return Object.assign({}, state, {
          newSignUp: Object.assign({}, state.newSignUp, {
              [action.propertyName]: action.value
          })      
      })
    // Summary: This case will clear state which contains value for textInput properties of login. 
    // Created: 11/19/2019 05:35 PM - VS (IN)
    case types.CLEAR_SIGN_UP_PROPERTY:
      return Object.assign({}, state, {
          newSignUp: JSON.parse(JSON.stringify(getSignUp(action.firstName, action.lastName, action.userName, action.email, action.password, action.phoneNumber)))
        })  

    // Summary: This case will set state for userInfo object which contains id and userInfo.
    // Created: 11/19/2019 05:35 PM - VS (IN)    
    case types.SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
};