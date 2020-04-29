// Summary: This file contains all the reducers of app to combine them as one. 
// Created: 11/10/2019 11:08 AM - VS (IN)
import { combineReducers } from 'redux';
import loginReducer from './login-reducers';
import signupReducer from './signup-reducers';
import userInfoReducer from './user-info-reducers';

//combineReducers will combine reducers from whole app
export default combineReducers({
	auth: loginReducer,
	SignupObject: signupReducer,
	UserInfoReducer: userInfoReducer 	
});