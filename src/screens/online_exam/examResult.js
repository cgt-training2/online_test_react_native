import React, { Component } from "react";
import { 
    Text,
    TouchableOpacity,
    View 
} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as examActions from '../../actions/online-exam-actions';

// Screen
import OnlineExam from '../online_exam/OnlineExam';

// StyleSheet
import { styles } from './style-exam-result';

// Summary: This class is used to calculate the result of exam.
class ExamResult extends Component{

    constructor(props){
        super(props);
        this.backToDashboard = this.backToDashboard.bind(this);
    }

    // Summar: Will Navigate to the dashboard and clear the redux state to initial state.
    backToDashboard(){
        console.log("backToDashboard()");
        this.props.actions.stopTimer();
        this.props.navigation.navigate('Home');
    }

    render(){
        return(
            <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    Result Screen
                </Text>
                <TouchableOpacity 
                    style = { styles.buttonContainer }
                    onPress = {()=>{
                        this.backToDashboard();
                }}>
                    <Text style = { styles.buttonText }>
                        Close Screen
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(examActions, dispatch)
    };
}

function mapStateToProps(state){
    return { 
        index: state.OnlineExamReducers.examDetail.index,
        examDetail: state.OnlineExamReducers.examDetail, 
        timerDetail: state.OnlineExamReducers.timerDetail,
        questionsObject: state.OnlineExamReducers.questionsObj,
        questionsObjectArray: state.OnlineExamReducers.questionsObjArray,
        renderState: state.OnlineExamReducers.renderVal
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( ExamResult );