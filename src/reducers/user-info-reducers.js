// Summary: Reducers for the userInfo functanality the state will be created based on the data provided by USER_INFO_SUCCESS action.
// Created: 11/14/2019 01:30 PM - NS (IN)
import * as types from '../actions/action-types';

// Reducers for the userInfo functanality the state will be created based on the data provided by USER_INFO_SUCCESS action.
// Created: 11/14/2019 01:30 PM - NS (IN)
const INITIAL_STATE = { userInfo: '' };

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case types.USER_INFO_SUCCESS:
	    return Object.assign({}, state, {
	    	data: action.payload
	    })	
       // return { ...state, data: action.payload };
    default:
      return state;
  }
};