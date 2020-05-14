import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as examActions from '../../actions/online-exam-actions';

// Component
import AnswerButtons from '../../components/online_exam/answer_button/AnswerButtons';
import HeaderOnlineExam from '../../components/online_exam/header/HeaderOnlineExam';
import QuestionSectionLeft from '../../components/online_exam/question_section/QuestionSectionsLeft';
import QuestionPalleteLegend from '../../components/common_components/question_pallete_legend';

// Enum
import { questions_array_object } from '../../enums/question_answers_set1';
import { answer_option, color_code_answer_button } from '../../enums/global_colors';

// Style sheet
import { styles } from './style-online-exam';

// Summary: This class will contain all the functionality of the online test.
class OnlineExam extends Component{

    // Summary: No header Will be shown for this component
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            index: 0,
            question_obj: questions_array_object[0],
            disable_prev_button: false,
            disable_next_button: false,
            disable_answer_button_view: true,
            questionsObj: questions_array_object,
            questionLegendModalVisible: false,
            save_count: 0,
            save_and_mark_review_count: 0,
            mark_review_count: 0,
            not_answered_count: 0
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
        this.getFillInTheBlanksChangeTextEvent = this.getFillInTheBlanksChangeTextEvent.bind(this);
        this.navigationOfQuestion = this.navigationOfQuestion.bind(this);
        this.openQuestionLegend = this.openQuestionLegend.bind(this);
        this.changeColorCodeQuestionPalleteNotAnsweredOrNextButton = this.changeColorCodeQuestionPalleteNotAnsweredOrNextButton.bind(this);
    }

    // Summary: It will prepare optionButtonColorArr. Throughout the test.
    componentWillMount(){
        for(let i=0; i < questions_array_object.length; i++){
            this.optionButtonColorArr.push([answer_option.option_button_not_answered, answer_option.option_button_not_answered, answer_option.option_button_not_answered, answer_option.option_button_not_answered]);
        }
    }

    // Summary: This function will call when user click on quit test.
    quitExam(){
        this.props.navigation.navigate('Home');
    }
    
    // Summary: This function will decrease the index for the question object.
    decreaseIndexChange() {
        this.props.actions.decreaseIndex(this.props.index, this.props.questionsObjectArray, 
            this.props.examDetail.not_answer_count, this.props.examDetail);        
    }

    // Summary: This function will increase the index for the question object.
    increaseIndexChange(buttonId) {
        let answerGiven = this.props.questionsObjectArray[this.props.index].answered;
        let indexLength = this.props.questionsObjectArray.length;
        if(answerGiven == true){
            // #2DBC01 save & Next, #441988 Mark review, #441988 (Save & Mark review with small green circle)
            // #E44502 not answered,
            if(buttonId == 0) {
                this.props.actions.increaseIndexSave(this.props.index, this.props.questionsObjectArray, 
                    color_code_answer_button.saveAndNext, true, this.props.examDetail.not_answer_count, this.props.examDetail.mark_review_count,
                    this.props.examDetail.save_count, this.props.examDetail.save_and_mark_review_count, 
                    indexLength, buttonId);
            }else if(buttonId == 1) {
                this.props.actions.increaseIndexSave(this.props.index, this.props.questionsObjectArray, 
                    color_code_answer_button.saveAndMarkReview, true, this.props.examDetail.not_answer_count, this.props.examDetail.mark_review_count,
                    this.props.examDetail.save_count, this.props.examDetail.save_and_mark_review_count, 
                    indexLength, buttonId);
            }else if(buttonId == 2) {
                this.props.actions.increaseIndexSave(this.props.index, this.props.questionsObjectArray, 
                    color_code_answer_button.saveAndMarkReview, true, this.props.examDetail.not_answer_count, this.props.examDetail.mark_review_count,
                    this.props.examDetail.save_count, this.props.examDetail.save_and_mark_review_count, 
                    indexLength, buttonId);
            }else if(buttonId == 3) {
                this.changeColorCodeQuestionPalleteNotAnsweredOrNextButton(indexLength, color_code_answer_button.next, true);
            }
        }else{
            this.changeColorCodeQuestionPalleteNotAnsweredOrNextButton(indexLength, color_code_answer_button.next, false);
        }
    }

    // Summary: This function will handle the working of next button or not answered by clicking on any button.
    changeColorCodeQuestionPalleteNotAnsweredOrNextButton(indexLength, colorCode, answered) {
        let saveTrue = this.props.questionsObjectArray[this.props.index].save;
        let saveMarkReviewTrue = this.props.questionsObjectArray[this.props.index].save_mark_review;
        let markReviewTrue = this.props.questionsObjectArray[this.props.index].mark_review;

        if(saveTrue == true || saveMarkReviewTrue == true || markReviewTrue == true){
            this.props.actions.increaseIndex(this.props.index, this.props.questionsObjectArray, 
                colorCode, true, this.props.examDetail.not_answer_count, this.props.examDetail.mark_review_count,
                this.props.examDetail.save_count, this.props.examDetail.save_and_mark_review_count, 
                indexLength);
        }else{
            this.props.actions.increaseIndex(this.props.index, this.props.questionsObjectArray, 
                colorCode, false, this.props.examDetail.not_answer_count, this.props.examDetail.mark_review_count,
                this.props.examDetail.save_count, this.props.examDetail.save_and_mark_review_count, 
                indexLength);
        }
    }

    // Summary: This function handles the color change of option selected by user.
    getOptionId(buttonId, optionSelected) {
        // Summary: arrInt is used to maintain the indexing. 
        let arrInt = [0, 1, 2, 3];
        // Summary: Index of clicked button removed.
        arrInt.splice(buttonId, 1);
        let arrColor = [];
        for(let i in arrInt){
            arrColor[arrInt[i]] = answer_option.option_button_not_answered;
        }
        // Summary: Set different color on clicked button.
        arrColor[buttonId] = answer_option.option_button_answered;
        this.optionButtonColorArr[this.props.index] = arrColor;
        // Summary: Fire action from here.
        this.props.actions.handleOptionColor( this.props.index, this.props.questionsObjectArray, optionSelected, this.props.renderState);
    }

    // Summary: This function handles onChangeText event of text input.
    getFillInTheBlanksChangeTextEvent(value){
        this.props.actions.handleFillInTheBlanks(this.props.index, this.props.questionsObjectArray,
            value, this.props.renderState, false);
    }
    // Summary: This function will handle the answer of text input type questions.
    getFillInTheBlanksAnswer(answer){
        this.props.actions.handleFillInTheBlanks(this.props.index, this.props.questionsObjectArray,
            answer, this.props.renderState, true);
    }

    // Summary: This function will handle the answer given by checkbox input.
    getCheckBoxAnswer(answerArr){
        console.log("getCheckBoxAnswer(answerArr)");
        console.log(answerArr);
         this.props.actions.handleCheckBox(this.props.index, this.props.questionsObjectArray,
            answerArr, this.props.renderState);
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

    // Summary: This function will handle the opening of question pallete legend.
    openQuestionLegend(){
        //Summary: Action Fired
        this.props.actions.handleQuestionPallete(this.props.index, this.props.questionsObjectArray,
            this.props.questionLegendModalVisible, this.props.examDetail);
    }

    // Summary: This function handles the navigation to particular question when clicked 
    // on question pallete question no.
    navigationOfQuestion(questionNo){
        let indexClicked = questionNo -1;
        //Summary: Action Fired
        this.props.actions.handleQuestionPallete(indexClicked, this.props.questionsObjectArray,
            this.props.questionLegendModalVisible, this.props.examDetail);
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
        return(
            <View style={ styles.container }>
                <View style={{flex:.5}}>
                    <HeaderOnlineExam 
                        quitExamProps = { this.quitExam }
                        openQuestionLegendProps = { this.openQuestionLegend }
                        questionLegendModalVisibleProps = { this.props.questionLegendModalVisible }
                        examDetailProps = { this.props.examDetail }
                    />
                </View>
                <View style={{flex: 6.3}}>
                    <View style = { styles.containerQuestion}>
                        <View style={ styles.containerQuestionLeft }>
                            <QuestionSectionLeft 
                                questionObjProps = { this.props.questionsObject }
                                // { this.state.question_obj }
                                getOptionIdProps = { this.getOptionId }
                                optionButtonColorProps = { this.optionButtonColorArr[this.props.index] }
                                getFillInTheBlanksAnswerProps = { this.getFillInTheBlanksAnswer }
                                getCheckBoxAnswerProps = { this.getCheckBoxAnswer }
                                handleKeyboardShowEventProps = { this.handleKeyboardShowEvent }
                                handleKeyboardHideEventProps = { this.handleKeyboardHideEvent }
                                descriptiveAnswerProps = { this.props.questionsObjectArray[this.props.index].descriptive_given_answer }
                                getFillInTheBlanksChangeTextEventProps = { this.getFillInTheBlanksChangeTextEvent }
                            />
                        </View>  
                        <QuestionPalleteLegend 
                            questionsObjProp = { this.props.questionsObjectArray }
                            navigationOfQuestionProps = { this.navigationOfQuestion }
                            openQuestionLegendProps = { this.openQuestionLegend }
                            questionLegendModalVisibleProps = { this.props.questionLegendModalVisible }
                            saveCountProps = { this.props.examDetail.save_count }
                            markReviewCountProps = { this.props.examDetail.mark_review_count }
                            notAnsweredCountProps = { this.props.examDetail.not_answer_count }
                            saveAndMarkReviewCountProps = { this.props.examDetail.save_and_mark_review_count } 
                        />
                    </View>
                </View>
                <View style = {{flex: .7}}>
                    {
                        this.state.disable_answer_button_view 
                            && 
                        <AnswerButtons 
                            actionDecreaseIndexChange = { this.decreaseIndexChange }
                            actionIncreaseIndexChange = { this.increaseIndexChange }
                            actionClearResponseFunction = { this.clearResponseFunction }
                            disablePrev = { this.props.examDetail.disable_prev_button } 
                            disableNext = { this.props.examDetail.disable_next_button }  
                        />
                    }
                </View>
            </View>
        );
    }
}

// this will dispatch the control to.
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(examActions, dispatch)
    };
}

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = ( state ) => {
    return { 
        index: state.OnlineExamReducers.examDetail.index,
        examDetail: state.OnlineExamReducers.examDetail, 
        questionsObject: state.OnlineExamReducers.questionsObj,
        questionsObjectArray: state.OnlineExamReducers.questionsObjArray,
        renderState: state.OnlineExamReducers.renderVal,
        questionLegendModalVisible: state.OnlineExamReducers.questionLegendModalVisible
    };
}

/*
As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
It’s frequently referred to as just mapState for short.
*/
export default connect(mapStateToProps, mapDispatchToProps)(OnlineExam);