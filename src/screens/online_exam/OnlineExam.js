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
            questionsObj: questions_array_object,
            optionButtonColor: ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD'] 
        };
        
        this.clearResponseFunction = this.clearResponseFunction.bind(this);
        this.decreaseIndexChange = this.decreaseIndexChange.bind(this);
        this.getOptionId = this.getOptionId.bind(this);
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
                    disable_prev_button: true,
                    optionButtonColor: ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD'] 
                }
            });
        }else{
            this.setState(prevState => {
                return { 
                    index: prevState.index - 1,
                    question_obj: questions_array_object[prevState.index - 1],
                    disable_prev_button: false,
                    optionButtonColor: ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD']
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
                    disable_prev_button: false,
                    optionButtonColor: ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD']
                }
            });
        }else{
            this.setState(prevState => {
                return { 
                    index: prevState.index + 1,
                    question_obj: questions_array_object[prevState.index + 1],
                    disable_prev_button: false,
                    disable_next_button: false,
                    optionButtonColor: ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD']
                }
            });
        }
    }

    // Summary: This function handles the color change of option selected by user.
    getOptionId(buttonId){
        // Summary: arrInt is used to maintain the indexing. 
        let arrInt = [0, 1, 2, 3];
        // Summary: Index of clicked button removed.
        arrInt.splice(buttonId, 1);
        let arrColor = [];
        for(let i in arrInt){
            arrColor[arrInt[i]] = '#C9D7DD';
        }
        // Summary: Set different color on clicked button.
        arrColor[buttonId] = '#9ACD32';
        this.setState(prevState => {
            return{
                optionButtonColor: arrColor,
            }
        });
    }

    // Summary: This function will clear the answer.
    clearResponseFunction(){
        this.setState(prevState => {
            return { 
                optionButtonColor: ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD']
            }
        });
    }

    render() {

        return(
            <View style={ styles.container }>
                <View style={{flex:1}}>
                    <HeaderOnlineExam />
                </View>
                <View style={{flex:5}}>
                    <View style = { styles.containerQuestion}>
                        <View style={ styles.containerQuestionLeft }>
                            <QuestionSectionLeft 
                                questionObjProps = { this.state.question_obj }
                                getOptionIdProps = { this.getOptionId }
                                optionButtonColorProps = { this.state.optionButtonColor } 
                            />
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
                        actionClearResponseFunction = { this.clearResponseFunction }
                        disablePrev = { this.state.disable_prev_button } 
                        disableNext = { this.state.disable_next_button }  
                    />
                </View>
            </View>
        );
    }
}
