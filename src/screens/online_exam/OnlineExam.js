import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

// Component
import AnswerButtons from '../../components/online_exam/answer_button/AnswerButtons';
import HeaderOnlineExam from '../../components/online_exam/header/HeaderOnlineExam';
import QuestionSectionLeft from '../../components/online_exam/question_section/QuestionSectionsLeft';
import QuestionSectionRight from '../../components/online_exam/question_section/QuestionSectionsRight';

// Dependency
import Orientation from 'react-native-orientation';

// Enum
import { questions_array_object } from '../../enums/question_answers_set1';

// Style sheet
import { styles } from './style-online-exam';

// Summary: This class will contain all the functionality of the online test.
export default class OnlineExam extends Component{

    // Summary: No header Will be shown for this component
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            index: 0,
            question_obj: questions_array_object[0],
            disable_prev_button: true,
            disable_next_button: false,
            questionsObj: questions_array_object  
        };
        
        this.decreaseIndexChange = this.decreaseIndexChange.bind(this);
        this.increaseIndexChange = this.increaseIndexChange.bind(this);
	}

    // Summary: It will lock the screen 
    componentWillMount(){
    }
    
    // Summary: This function will decrease the index for the question object.
    decreaseIndexChange() {

        if(this.state.index == 1 ){
            this.setState(prevState => {
                return { 
                    index: prevState.index - 1,
                    question_obj: questions_array_object[prevState.index - 1],
                    disable_prev_button: true 
                }
            });
        }else{
            this.setState(prevState => {
                return { 
                    index: prevState.index - 1,
                    question_obj: questions_array_object[prevState.index - 1],
                    disable_prev_button: false
                }
            });
        }
    }

    // Summary: This function will increase the index for the question object.
    increaseIndexChange() {
        let indexLength = questions_array_object.length;
        if(this.state.index == indexLength - 1 ){
            this.setState(prevState => {
                return { 
                    // index: prevState.index + 1,
                    // question_obj: questions_array_object[prevState.index + 1],
                    disable_prev_button: false,
                    // disable_next_button: true
                }
            });
        }else{
            this.setState(prevState => {
                return { 
                    index: prevState.index + 1,
                    question_obj: questions_array_object[prevState.index + 1],
                    disable_prev_button: false,
                    disable_next_button: false
                }
            });
        }
    }

    render() {
        // console.log("render function()");
        // console.log(this.state.question_obj);
        return(

            <View style={ styles.container }>
                <View style={{flex:1}}>
                    <HeaderOnlineExam />
                </View>
                <View style={{flex:5}}>
                    <View style = { styles.containerQuestion}>
                        <View style={ styles.containerQuestionLeft }>
                            <QuestionSectionLeft questionObjProps = { this.state.question_obj } />
                        </View> 
                        <View style={ styles.containerQuestionRight }>
                            <QuestionSectionRight 
                                questionsObjProp = { this.state.questionsObj }
                            />
                        </View>     
                    </View>
                </View>
                <View style = {{flex: 1.5}}>
                    <AnswerButtons 
                        actionDecreaseIndexChange = { this.decreaseIndexChange }
                        actionIncreaseIndexChange = { this.increaseIndexChange }
                        disablePrev = { this.state.disable_prev_button } 
                        disableNext = { this.state.disable_next_button }  
                    />
                </View>
            </View>
        );
    }
}
