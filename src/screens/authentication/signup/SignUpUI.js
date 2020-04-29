// Summary: SignUpUI Component used to register new user.
// Created: Vaibhav Sharma
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput, 
    Text,   
    CheckBox,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as signUpActions from '../../../actions/signup-actions';

//Components
import  Loader  from '../../../components/loader/Loader';

// Stylesheet
import SingupStyles from './styles-signup';

// Utils
import { validateValue, validateObject } from '../../../utils/validation/validation';
import validationTypes from '../../../enums/validation/validation-types';

// Summary: Validations variable used to pass to validateObject to check the requirements. 
const validations = {

    "firstName": {alias: "First Name", validations: [validationTypes.REQUIRED]},
    "lastName": {alias: "Last Name", validations: [validationTypes.REQUIRED]},
    "userName": {alias: "User Name", validations: [validationTypes.REQUIRED]},
    "email": {alias: "Login Email", validations: [validationTypes.REQUIRED, validationTypes.EMAIL]},
    "password": {alias: "Login Password", validations: [validationTypes.REQUIRED]},
    "phoneNumber": {alias: "Phone Number", validations: [validationTypes.REQUIRED, validationTypes.MIN_CHARS], requirements: 10},
    "tncChecked": {alias: "Terms and Conditions", validations: [validationTypes.BOOLEAN]}
};

class SignUpUI extends Component {
    
    constructor(props){

        super(props);
        this.state = {
            isLoading:false
        };
    }

    // Summary: This method is lifecycle method where we reset the variables.
    componentWillUnmount(){
        this.props.actions.clearSignUpProperty("", "", "", "", "", "");
        this.props.actions.termConditionChanged(!this.props.tncChecked);
    }

    // Summary: HandleChangeLoginProperty function used to handle onChangeText of textInput and set the value in reducers.
    handleChangeSignUpProperty(fieldName, text) {
    
        const propertyName = fieldName;
        const value = text;
    
        this.props.actions.setNewSignUpProperty( propertyName, value );  
    }

    // Summary: SignUp function validate the signup form and on successful validation call this.callSignUpAPI()
    signUp = () => {
        // const { tncChecked } = this.props;
        // Summary: Value along with the key of textInputs used to pass to validateObject.       
        const signUpInputObj = {
            "firstName": this.props.firstName,
            "lastName": this.props.lastName,
            "userName": this.props.userName,
            "email": this.props.email, 
            "password": this.props.password,
            "phoneNumber": this.props.phoneNumber,
            "tncChecked": this.props.tncChecked
        };
        this.props.actions.validate("login","signUp", signUpInputObj, validations, this.callSignUpAPI);     
    }

    // Summary: Use to dispatch the performSignup action.
    callSignUpAPI = () =>{
        
        this.setState({ isLoading:true });        
        this.props.actions.performSignup(this.props.userName, this.props.email, this.props.password, this.props.phoneNumber, this.props.firstName, this.props.lastName).then(res => {
            console.log(res);
            this.setState({ isLoading:false });            
            if(res.code){
                Alert.alert(res.description);
            }else if(res._id){
                    
                this.props.navigation.navigate('Login');
            }    
        });
    }


    // Summary: render() used to display the UI on the mobile screen.
    render() {

        return (

            <KeyboardAvoidingView style={SingupStyles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
                 
                 <Loader
                    loading={this.state.isLoading} />

                <TextInput
                    style={SingupStyles.input}
                    placeholder='First Name'
                    autoCapitalize="none"
                    placeholderTextColor='grey'
                    onChangeText={ (value) => this.handleChangeSignUpProperty("firstName", value) }
                    // onChangeText = { (firstName) => this.props.actions.firstNameChanged(firstName) }
                    ref={ (input) => this.firstNameInput = input }
                    returnKeyType = "next"
                    onSubmitEditing = { () => {
                        // let response = validateValue("First Name", this.props.firstName, [ validationTypes.REQUIRED ], 50, "en");
                        // if(response.messages.length > 0){
                        //   Alert.alert(response.messages[0]);
                        // }else{
                          this.lastNameInput.focus();   
                        // }
                    }}
                />
                {
                    this.props.errors.firstName.length > 0 ? <Text> { this.props.errors.firstName[0] } </Text> : null
                }                 
                <TextInput
                    style={SingupStyles.input}
                    placeholder='Last Name'
                    autoCapitalize="none"
                    placeholderTextColor='grey'
                    onChangeText={ (value) => this.handleChangeSignUpProperty("lastName", value) }
                    // onChangeText = { (lastName) => this.props.actions.lastNameChanged(lastName) }
                    ref={ (input) => this.lastNameInput = input }
                    returnKeyType = "next"
                    onSubmitEditing = { () => {
                        // let response = validateValue("Last Name", this.props.lastName, [ validationTypes.REQUIRED ], 50, "en");
                        // if(response.messages.length > 0){
                        //   Alert.alert(response.messages[0]);
                        // }else{
                          this.usernameInput.focus();   
                        // }
                    }}
                />
                {
                    this.props.errors.lastName.length > 0 ? <Text> { this.props.errors.lastName[0] } </Text> : null
                }
                <TextInput
                    style={SingupStyles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='grey'
                    onChangeText={ (value) => this.handleChangeSignUpProperty("userName", value) }
                    // onChangeText = { (userName) => this.props.actions.userNameChanged(userName) }
                    ref={ (input) => this.usernameInput = input }
                    returnKeyType = "next"
                    onSubmitEditing ={()=>{
                        // let response = validateValue("Username", this.props.userName, [ validationTypes.REQUIRED ], 6, "en");                      
                        // if( response.messages.length > 0 ) {
                        //   // Alert.alert(messages.VALIDATE_PASSWORD)
                        //   Alert.alert(response.messages[0]);
                        // }else{
                          this.emailInput.focus();   
                        // }
                    }}
                />
                {
                    this.props.errors.userName.length > 0 ? <Text> { this.props.errors.userName[0] } </Text> : null
                }
                <TextInput
                    style={SingupStyles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    keyboardType='email-address'
                    placeholderTextColor='grey'
                    onChangeText={ (value) => this.handleChangeSignUpProperty("email", value) }
                    // onChangeText = { (email) => this.props.actions.emailChanged(email) }
                    ref={ (input) => this.emailInput = input }
                    returnKeyType = "next"
                    onSubmitEditing = { () => {
                        // let response = validateValue("Signup Email", this.props.email, [ validationTypes.REQUIRED, validationTypes.EMAIL ], 50, "en");
                        // if(response.messages.length > 0){
                        //   Alert.alert(response.messages[0]);
                        // }else{
                          this.passwordInput.focus();   
                        // }
                    }}
                />
                {
                    this.props.errors.email.length > 0 ? <Text> { this.props.errors.email[0] } </Text> : null
                }
                <TextInput
                    style={SingupStyles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='grey'
                    ref={ (input) => this.passwordInput = input }
                    returnKeyType = "next"
                    onChangeText={ (value) => this.handleChangeSignUpProperty("password", value) }
                    // onChangeText = { (password) => this.props.actions.passwordChanged(password) }
                    onSubmitEditing ={()=>{
                        // let response = validateValue("Signup Password", this.props.password, [ validationTypes.REQUIRED, validationTypes.MIN_CHARS ], 6, "en");                      
                        // if( response.messages.length > 0 ) {
                        //   Alert.alert(response.messages[0]);
                        // }else{
                          this.phoneNumberInput.focus();   
                        // }
                    }}
                />
                {
                    this.props.errors.password.length > 0 ? <Text> { this.props.errors.password[0] } </Text> : null
                }
                <TextInput
                    style={SingupStyles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    keyboardType='phone-pad'
                    placeholderTextColor='grey'
                    onChangeText={ (value) => this.handleChangeSignUpProperty("phoneNumber", value) }
                    // onChangeText = { (phoneNumber) => this.props.actions.phoneNumberChanged(phoneNumber) }
                    ref={ (input) => this.phoneNumberInput = input }
                    returnKeyType = "done"
                    onSubmitEditing ={()=>{
                        // let response = validateValue("Signup phoneNumber", this.props.phoneNumber, [ validationTypes.REQUIRED, validationTypes.MIN_CHARS ], 10, "en");                      
                        // if( response.messages.length > 0 ) {
                        //   Alert.alert(response.messages[0]);
                        // }
                    }}
                />
                {
                    this.props.errors.phoneNumber.length > 0 ? <Text> { this.props.errors.phoneNumber[0] } </Text> : null
                }
                <View style={SingupStyles.tncContainer}>
                    <CheckBox 
                        value={ this.props.tncChecked }
                        onValueChange={ ()=>this.props.actions.termConditionChanged(!this.props.tncChecked) }
                    />
                    <Text style={{ marginTop: 5 }}> Terms & Conditions</Text>
                </View>
                {
                    this.props.errors.tncChecked.length > 0 ? <Text> { this.props.errors.tncChecked[0] } </Text> : null
                }
                <TouchableOpacity
                    style={SingupStyles.signupButton}
                    onPress={ () => this.signUp() 
                    }>
                    <Text
                        style={SingupStyles.signupText}>Sign Up</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
      actions: bindActionCreators(signUpActions, dispatch)
    };
}

const mapStateToProps = ({ SignupObject }) => {
    console.log(SignupObject);
    const { tncChecked } = SignupObject;
    return{
       tncChecked,
       firstName: SignupObject.newSignUp.firstName, 
       lastName: SignupObject.newSignUp.lastName, 
       userName: SignupObject.newSignUp.userName, 
       email: SignupObject.newSignUp.email, 
       password: SignupObject.newSignUp.password, 
       phoneNumber: SignupObject.newSignUp.phoneNumber, 
       errors: SignupObject.errors.signUp
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUI);
