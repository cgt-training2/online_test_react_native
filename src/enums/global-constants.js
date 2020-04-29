// Summary: This file contains constant value which can be use in all modules.
// Created By: Vaibhav Sharma


// Details related to the Auth0 account.
// Created By: Vaibhav Sharma
export const auth0 = { domain: 'dev-lcu1vnux.auth0.com', clientId: "YoCa4fqDBziF6ORDAXYzCnhGpn5PUrHD", client_secret: "EO25tsTS2mfn-SkiIR6r9PN0lXNc1V7J4mNT15QN6WSKGwhD9Lr54tG920AdDWa2" };

export const SignupApi = 'https://' + auth0.domain + '/dbconnections/signup';

export const DB_CONNECTION_NAME = 'Username-Password-Authentication';

export const UserInfoApi = 'https://' + auth0.domain + '/userinfo';
// Constant messages for alerts
// Created By: Vaibhav Sharma
export const messages = {
	EMPTY_EMAIL: 'Please enter email',
	VALIDATE_EMAIL: 'Please enter valid email',
	VALIDATE_PASSWORD: 'Password need to be greater than six characters',
  VERIFY_EMAIL: 'Please verify your email before login'
};


// ****************** validateEmail and validatePassword not used in the app ********************

// validateEmail function used to validate if user email is in correct format.
// Created By: Vaibhav Sharma

export const validateEmail = (email) => {
  
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// validatePassword function used to check and validate password length.
// Created By: Vaibhav Sharma

export const validatePassword = (password) => {
  
  var txtLength = password.length;
  if(txtLength<6){
    return true;
  }else{
    return false;
  }
};

