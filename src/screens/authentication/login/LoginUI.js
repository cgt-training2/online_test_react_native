// Summary: LoginUI Component used to login a user.
// Created By: Vaibhav Sharma
import React, { Component } from 'react';
import {
  Platform,
  Text,
  View, 
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as loginActions from '../../../actions/login-actions';

// Components 
import  Loader  from '../../../components/loader/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Enums
import { auth0, messages } from '../../../enums/global-constants';

// Styles sheet
import { styles } from './style-login-ui';

// Utils 
import { validateValue, validateObject } from '../../../utils/validation/validation';
import validationTypes from '../../../enums/validation/validation-types';
import { _storeData } from  '../../../utils/async_storage/async-storage-functions';

// Summary: Validations variable used to pass to validateObject to validate. 
const validations = {
    "email": {alias: "Login Email", validations: [validationTypes.REQUIRED, validationTypes.EMAIL]},
    "password": {alias: "Login Password", validations: [validationTypes.REQUIRED, validationTypes.MIN_CHARS], requirements: 6}
};

// Summary: LoginUI which contains different function to login a user.
class LoginUI extends Component{

	constructor(props){
	    super(props);
	    this.state = {
	      isLoading:false  
	    };
	    this.navigateToDashboard = this.navigateToDashboard.bind(this);	    
	}

	// Summary componentWillMount will clear LoginToken and NewsData after a user hit login button.
	componentWillMount(){
		this.props.actions.clearLoginToken( "", 0, "", "", "" );
	}

	// Summary ComponentDidMount will addListener for didBlur method which clear LoginProperty and Errors. When a user navigate to signup page and dashboard.
	componentDidMount() {
	    const { navigation } = this.props;
	    this.blurListener = navigation.addListener('didBlur', () => {
	    	this.props.actions.clearLoginProperty( "", "" );
	    	this.props.actions.clearErrors();
	    });
	}

	// Summary: This method is lifecycle method where we reset the variables.
	componentWillUnmount(){
		// this.props.actions.clearLoginProperty( "", "" );
		// this.props.actions.clearErrors();
	}
	
	// Summary: HandleChangeLoginProperty function used to handle onChangeText of textInput and set the value in reducers.
	handleChangeLoginProperty(fieldName, text) {
	
		const propertyName = fieldName;
		const value = text;
	
		this.props.actions.setNewLoginProperty( propertyName, value );	
	}

	// Summary: loginFunction checks the validations and call the api using redux.
	// Created By: Vaibhav Sharma
	loginFunction = () =>{

		const loginInputObj = {
			"email": this.props.email, 
			"password": this.props.password
		};

		this.props.actions.validate("login","login", loginInputObj, validations, this.callLoginAPI); 
	}

	// Summary: callLoginAPI function use to call the login api.
	// Created By: Vaibhav Sharma
	callLoginAPI = () => {
		
		this.setState({isLoading:true});

		// this will dispatch the control to mapDispatchToProps.
		this.props.actions.fetchLoginAccessToken(this.props.email, this.props.password).then(res =>{
			if(res.error){
				this.setState({ isLoading:false });
				Alert.alert(res.error_description);
			}else if(res.access_token){

				this.navigateToDashboard(res.access_token);
			}
		});
	}

	// Summary: navigateToDashboard function will check the response display an error if invalid response else navigate to dashboard.
	// Created By: Vaibhav Sharma
	navigateToDashboard = (token) => {

		this.props.actions.getUserInfo(token).then(res =>{
			this.setState({ isLoading:false });
			if(res.email_verified == false){
				Alert.alert(messages.VERIFY_EMAIL);
				return;
			}else{
				var userObject = _storeData('@username', res.name);
				this.props.navigation.navigate('HomeDrawer');
			}
		});        		
	}

	// Summary: Navigate to the signup.
	// Created By: Vaibhav Sharma
	registerFunction =()=>{
		this.props.navigation.navigate('Signup');
	}

	render(){
		
		return(
			<KeyboardAwareScrollView enableAutomaticScroll={(Platform.OS === 'ios')} enableOnAndroid={true}>
			    <View style={styles.container}>
			    	<Loader
		                loading={this.state.isLoading} />
			        <Image style={styles.logo}
			          source={require('../../../assets/images/logo_resize.png')}/>  
			        
			        <Text style={styles.fontWelcome}> Login to IFAS </Text>
			        		            
			            <TextInput 
				            style = { styles.inputFirst } 
				            placeholder = "Enter Email"
				            placeholderTextColor = "rgba(128,128,128,0.7)"
				            autoCapitalize = "none"
				            autoCorrect = { false }
				            name = "email"
				            onChangeText={ (value) => this.handleChangeLoginProperty("email", value) }
				            keyboardType = "email-address"
				            returnKeyType = "next"
				            ref={ (input) => this.emailInput = input }
				            onSubmitEditing = { (event) => {
				            	// this.handleChangeLoginProperty("email",event);
				                   this.passwordInput.focus();	
				            }
				        }>
			            </TextInput>
			            {
	                    	this.props.errors.email.length > 0 ? <Text> { this.props.errors.email[0] } </Text> : null
	                	}
			            <TextInput 
			              style={ styles.input } 
			              underlineColorAndroid='transparent'
			              placeholder="Enter password"
			              placeholderTextColor="rgba(128,128,128,0.7)"
			              autoCapitalize="none"
			              autoCorrect={ false }
			              keyboardType="default"
			              returnKeyType="done"
			              onChangeText={ (value) => this.handleChangeLoginProperty("password", value) }
			              // onChangeText={ (value) => this.onTextChangeHandler("login", "password", value) }
			              ref={ (input) => this.passwordInput = input }
			              onSubmitEditing ={(event)=>{
			              	// this.handleChangeLoginProperty("password",event);
			              }}
			            secureTextEntry>
			            </TextInput>
			            {
	                    	this.props.errors.password.length > 0 ? <Text> { this.props.errors.password[0] } </Text> : null
	                	}
			            <View style={ styles.viewBtn }>  
			              
			              <TouchableOpacity style={ styles.buttonContainer } onPress={ () => this.loginFunction() }>
			                  <Text style={ styles.buttonText }>Login</Text>
			              </TouchableOpacity>

			              <TouchableOpacity style={ styles.buttonContainer }
			                onPress={() =>  this.registerFunction() }>
			                <Text style={ styles.buttonText }>Register</Text>
			              </TouchableOpacity>                

			            </View>                
			    </View>
			</KeyboardAwareScrollView>    
		);
	}
}	

// this will dispatch the control to bindActionCreators.
// Created By: Vaibhav Sharma
function mapDispatchToProps(dispatch) {

	return {
	  actions: bindActionCreators(loginActions, dispatch)
	};
}

const mapStateToProps = ({ auth }) => {
	
	return { 
		email: auth.newLogin.email,
		password: auth.newLogin.password,
		errors: auth.errors.login
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginUI);