import React, { Component } from "react";
import { 
    ScrollView,
    Text, 
    TouchableOpacity,
    View 
} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as examActions from '../../actions/online-exam-actions';

// Component
import HeaderOnlineExam from '../../components/online_exam/header/HeaderOnlineExam';
import QuestionSectionRight from '../../components/online_exam/question_section/QuestionSectionsRight';
import QuestionLegendCount from '../../components/common_components/question_legend_count';
import EndExamAlert from '../../components/common_components/end_exam_alert';

// StyleSheet
import { buttons, styles } from './style-exam-summary';

// Summary: This class will contain summary of exam.
class ExamSummary extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.runTimer = null;
        this.endExam = this.endExam.bind(this);
        this.quitExam = this.quitExam.bind(this);
        this.openQuestionLegend = this.openQuestionLegend.bind(this);
        this.navigationOfQuestion = this.navigationOfQuestion.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount(){
        this.runTimer = setInterval(() => {
            this.props.actions.startTimer(this.props.timerDetail.totalSeconds);
        }, 1000);
    }

    quitExam(){
        console.log("quitExam()");
    }

    openQuestionLegend(){
        console.log("openQuestionLegend()");
    }

    // Summary: This function will when time ends or user submit the paper.
    endExam(){
        // console.log("endExam()");
        clearInterval(this.runTimer);
        // this.props.actions.stopTimer();
        this.props.navigation.navigate('TestResult');
    }

    navigationOfQuestion(){
        console.log("navigationOfQuestion()");
    }

    // SUmmary: This function is used to toggle the modal
    toggleModal(oKText){
        if(oKText == "ok"){
            this.setState(prevState =>{
                return{
                    modalVisible: !(prevState.modalVisible)
                }; 
            });
            clearInterval(this.runTimer);            
            this.props.navigation.navigate('TestResult');
        }else{
            this.setState(prevState =>{
                return{
                    modalVisible: !(prevState.modalVisible)
                }; 
            });
        }
    }

    render(){
        return(
            <View style = { styles.container }>
                <EndExamAlert 
                    ModalVisibleProps = { this.state.modalVisible }
                    closeModalProps = { this.toggleModal }
                    examDetailProps = { this.props.examDetail }
                    totalQuestionsProps = { this.props.questionsObjectArray.length }
                />
                <View style = { styles.containerTop }>
                    <HeaderOnlineExam 
                        quitExamProps = { this.quitExam }
                        openQuestionLegendProps = { this.openQuestionLegend }
                        examDetailProps = { this.props.examDetail }
                        timerDetailProps = { this.props.timerDetail }
                        endExamProps = { this.endExam }
                    />
                </View>
                <View style= { styles.containerMiddle }>
                    <ScrollView contentContainerStyle = {{ flexGrow: 1 }}>
                        <QuestionSectionRight 
                            questionsObjProp = { this.props.questionsObjectArray }
                            navigationOfQuestionProps = { this.navigationOfQuestion }
                            openQuestionLegendProps = { this.openQuestionLegend }
                            questionLegendModalVisibleProps = { false }
                        />                                
                        <View style={{ width: '100%', height: 1, backgroundColor: '#000000'}}>
                        </View>
                        <View style = {{ padding: 5 }}>
                            <QuestionLegendCount
                                saveCountProps = { this.props.examDetail.save_count }
                                markReviewCountProps = { this.props.examDetail.mark_review_count }
                                notAnsweredCountProps = { this.props.examDetail.not_answer_count }
                                saveAndMarkReviewCountProps = { this.props.examDetail.save_and_mark_review_count }
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style = { styles.containerBottom }>
                    <View style = { styles.containerBottomChild } >
                        <View style = { styles.containerBottomChildInner }>
                            <TouchableOpacity style = { buttons.buttonContainer}>
                                <Text>
                                    Review All
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.containerBottomChildInner }>
                            <TouchableOpacity style = { buttons.buttonContainer}>
                                <Text>
                                    Review Not
                                </Text>
                                <Text>
                                    Answered
                                </Text>
                                
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.containerBottomChildInner }>
                            <TouchableOpacity style = { buttons.buttonContainer}>
                                <Text>
                                    Review
                                </Text>
                                <Text>
                                    Marked
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.containerBottomChildInner }>
                            <TouchableOpacity 
                                style = { buttons.buttonContainer}
                                onPress = { ()=>{
                                    this.toggleModal("not");
                            }}>
                                <Text>
                                    End Exam
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>               
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

export default connect( mapStateToProps, mapDispatchToProps )( ExamSummary );