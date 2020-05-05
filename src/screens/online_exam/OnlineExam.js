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
            disable_answer_button_view: true,
            questionsObj: questions_array_object
        };
        this.optionButtonColorArr = [];
        this.clearResponseFunction = this.clearResponseFunction.bind(this);
        this.decreaseIndexChange = this.decreaseIndexChange.bind(this);
        this.getOptionId = this.getOptionId.bind(this);
        this.increaseIndexChange = this.increaseIndexChange.bind(this);
        this.quitExam = this.quitExam.bind(this);
        this.getFillInTheBlanksAnswer = this.getFillInTheBlanksAnswer.bind(this);
        this.getCheckBoxAnswer = this.getCheckBoxAnswer.bind(this); 
        this.handleKeyboardShowEvent = this.handleKeyboardShowEvent.bind(this);
        this.handleKeyboardHideEvent = this.handleKeyboardHideEvent.bind(this);
        this.changeColorCodeQuestionPallete = this.changeColorCodeQuestionPallete.bind(this);
        this.changeColorCodeQuestionPalleteSaveAndMarkReview = this.changeColorCodeQuestionPalleteSaveAndMarkReview.bind(this);
        this.getFillInTheBlanksChangeTextEvent = this.getFillInTheBlanksChangeTextEvent.bind(this);
	}

    // Summary: It will prepare optionButtonColorArr. Throughout the test.
    componentWillMount(){
        for(let i=0; i < questions_array_object.length; i++){
            this.optionButtonColorArr.push(['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD']);
        }
    }

    // Summary: This function will call when user click on quit test.
    quitExam(){
        this.props.navigation.navigate('Home');
    }
    
    // Summary: This function will decrease the index for the question object.
    decreaseIndexChange() {
        if(this.state.index == 1 ){
            this.setState(prevState => {
                return { 
                    index: prevState.index - 1,
                    question_obj: questions_array_object[prevState.index - 1],
                    disable_prev_button: true,
                }
            });
        }else{
            this.setState(prevState => {
                return { 
                    index: prevState.index - 1,
                    question_obj: questions_array_object[prevState.index - 1],
                    disable_prev_button: false,
                }
            });
        }
    }

    // Summary: This function will increase the index for the question object.
    increaseIndexChange(buttonId) {
        console.log("increaseIndexChange()");
        let answerGiven = questions_array_object[this.state.index].answered;
        let indexLength = questions_array_object.length;
        if(answerGiven == true){
            // #2DBC01 save & Next, #441988 Mark review, #441988 (Save & Mark review with small green circle)
            // #E44502 not answered,
            if(buttonId == 0) {
                this.changeColorCodeQuestionPallete(indexLength, '#2DBC01');
            }else if(buttonId == 1) {
                this.changeColorCodeQuestionPalleteSaveAndMarkReview(indexLength, '#441988');
            }else if(buttonId == 2) {
                this.changeColorCodeQuestionPallete(indexLength, '#441988');
            }else if(buttonId == 3) {
                this.changeColorCodeQuestionPallete(indexLength, '#E44502');
            }
        }else{
            if(this.state.index == indexLength - 1 ){
                this.setState(prevState => {
                    return { 
                        disable_prev_button: false,
                    }
                });
            }else{
                this.setState(prevState => {
                    return { 
                        index: prevState.index + 1,
                        question_obj: questions_array_object[prevState.index + 1],
                        disable_prev_button: false,
                        disable_next_button: false,
                    }
                });
            }
        }
    }

    // Summary: This function handles the color code change of question pallete.
    changeColorCodeQuestionPallete(indexLength, colorCode) {
        // question_pallete_color, answered
        if(this.state.index == indexLength - 1 ){
            this.setState(prevState => {
                let questionsObjVar = Object.assign(
                    {}, prevState.questionsObj
                );  // creating copy of state variable questionsObj
                questionsObjVar[this.state.index].question_pallete_color = colorCode;
                return { 
                    disable_prev_button: false,
                    questionsObjVar
                }
            });
        }else{
            this.setState(prevState => {
                let questionsObjVar = Object.assign(
                    {}, prevState.questionsObj
                );  // creating copy of state variable questionsObj
                questionsObjVar[this.state.index].question_pallete_color = colorCode;
                return { 
                    index: prevState.index + 1,
                    question_obj: questions_array_object[prevState.index + 1],
                    disable_prev_button: false,
                    disable_next_button: false,
                    questionsObjVar
                }
            });
        }
    }

    // Summary: This function handles the color code change of question pallete when Save And Mark Review.
    changeColorCodeQuestionPalleteSaveAndMarkReview(indexLength, colorCode) {
        if(this.state.index == indexLength - 1 ){
            this.setState(prevState => {
                let questionsObjVar = Object.assign(
                    {}, prevState.questionsObj
                );  // creating copy of state variable questionsObj
                questionsObjVar[this.state.index].question_pallete_color = colorCode;
                questionsObjVar[this.state.index].save_mark_review = true;
                return { 
                    disable_prev_button: false,
                    questionsObjVar
                }
            });
        }else{
            this.setState(prevState => {
                let questionsObjVar = Object.assign(
                    {}, prevState.questionsObj
                );  // creating copy of state variable questionsObj
                questionsObjVar[this.state.index].question_pallete_color = colorCode;
                questionsObjVar[this.state.index].save_mark_review = true;
                return { 
                    index: prevState.index + 1,
                    question_obj: questions_array_object[prevState.index + 1],
                    disable_prev_button: false,
                    disable_next_button: false,
                    questionsObjVar
                }
            });
        }
    }

    // Summary: This function handles the color change of option selected by user.
    getOptionId(buttonId, optionSelected){
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
        this.optionButtonColorArr[this.state.index] = arrColor;
        //Summary: Set state
        this.setState(prevState => {
            let questionsObjVar = Object.assign(
                {}, prevState.questionsObj
            );  // creating copy of state variable questionsObj
            questionsObjVar[this.state.index].selected_option = optionSelected;
            questionsObjVar[this.state.index].answered = true; 
            // update the selected_option property, assign a new value.                 
            return{
                questionsObjVar
            }
        });
    }

    // Summary: This function handles onChangeText event of text input.
    getFillInTheBlanksChangeTextEvent(value){
        this.setState(prevState => {
            let questionsObjVar = Object.assign(
                {}, prevState.questionsObj
            ); // creating copy of state variable questionsObj
            questionsObjVar[this.state.index].descriptive_given_answer = value; 
            // update the descriptive_given_answer property, assign a new value.                 
            return{
               questionsObjVar
            }
        });
    }
    // Summary: This function will handle the answer of text input type questions.
    getFillInTheBlanksAnswer(answer){
        this.setState(prevState => {
            let questionsObjVar = Object.assign(
                {}, prevState.questionsObj
            ); // creating copy of state variable questionsObj
            questionsObjVar[this.state.index].descriptive_given_answer = answer; 
            questionsObjVar[this.state.index].answered = true;
            // update the descriptive_given_answer property, assign a new value.                 
            return{
               questionsObjVar
            }
        });
    }

    // Summary: This function will handle the answer given by checkbox input.
    getCheckBoxAnswer(answerArr){
        this.setState(prevState => {
            let questionsObjVar = Object.assign(
                {}, prevState.questionsObj
            ); // creating copy of state variable questionsObj
            questionsObjVar[this.state.index].answer_multiselect = answerArr; 
            questionsObjVar[this.state.index].answered = true;
            // update the answer_multiselect property, assign a new value.                 
            return{
               questionsObjVar
            }
        });
    }

    // Summary: It will handle event when keyboard show.
    handleKeyboardShowEvent(){
        this.setState({
            disable_answer_button_view: false
        });
    }

    // Summary: It will handle event when keyboard hide.
    handleKeyboardHideEvent(){
        this.setState({
            disable_answer_button_view: true
        });
    }

    // Summary: This function will clear the answer.
    clearResponseFunction() {
        this.optionButtonColorArr[this.state.index] = ['#C9D7DD', '#C9D7DD', '#C9D7DD', '#C9D7DD'];
        this.setState(prevState => {
            let questionsObjVar = Object.assign(
                {}, prevState.questionsObj
            ); // creating copy of state variable questionsObj
            questionsObjVar[this.state.index].answer_multiselect = [];
            questionsObjVar[this.state.index].descriptive_given_answer = ""; 
            questionsObjVar[this.state.index].selected_option = "";
            questionsObjVar[this.state.index].answered = false;
            questionsObjVar[this.state.index].question_pallete_color = '#C9D7DD';
            // update the answer_multiselect property, assign a new value.                 
            return{
               questionsObjVar
            }
        });
    }

    render() {
        // console.log("OnlineExam extends Component");
        // console.log(this.state.questionsObj);
        return(
            <View style={ styles.container }>
                <View style={{flex:1}}>
                    <HeaderOnlineExam 
                        quitExamProps = { this.quitExam }
                    />
                </View>
                <View style={{flex:5}}>
                    <View style = { styles.containerQuestion}>
                        <View style={ styles.containerQuestionLeft }>
                            <QuestionSectionLeft 
                                questionObjProps = { this.state.question_obj }
                                getOptionIdProps = { this.getOptionId }
                                optionButtonColorProps = { this.optionButtonColorArr[this.state.index] }
                                getFillInTheBlanksAnswerProps = { this.getFillInTheBlanksAnswer }
                                getCheckBoxAnswerProps = { this.getCheckBoxAnswer }
                                handleKeyboardShowEventProps = { this.handleKeyboardShowEvent }
                                handleKeyboardHideEventProps = { this.handleKeyboardHideEvent }
                                descriptiveAnswerProps = { this.state.questionsObj[this.state.index].descriptive_given_answer }
                                getFillInTheBlanksChangeTextEventProps = { this.getFillInTheBlanksChangeTextEvent }
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
                    {
                        this.state.disable_answer_button_view 
                            && 
                        <AnswerButtons 
                            actionDecreaseIndexChange = { this.decreaseIndexChange }
                            actionIncreaseIndexChange = { this.increaseIndexChange }
                            actionClearResponseFunction = { this.clearResponseFunction }
                            disablePrev = { this.state.disable_prev_button } 
                            disableNext = { this.state.disable_next_button }  
                        />
                    }
                </View>
            </View>
        );
    }
}
