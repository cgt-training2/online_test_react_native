import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

// Dependency
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


// Stylesheet
import { buttons, texts, styles } from './style-question-section-left';

// Summary: This section will contain the functionality for questions.
export default class QuestionSectionLeft extends Component{

    // {
    //     "answer_multiselect": [], "descriptive_answer": false, "descriptive_given_answer": "", 
    //     "descriptive_rigth_answer": "", "mark_review": false, "multiselect": false, 
    //     "options": {"a": "Wednesday", "b": "Monday", "c": "Thursday", "d": "Friday"}, 
    //     "question_no": 1, "question_text": "What was the day of week on 17th June 1998?", 
    //     "right_answer": "b", "right_answer_multiselect": [], "save": false, 
    //     "save_mark_review": false, "selected_option": "a"
    // }

    componentDidMount(){
        console.log("componentDidMount()");
        console.log(this.props.questionObjProps.options.a);
    }

    render(){
        
        return(
            <View>
                <KeyboardAwareScrollView enableAutomaticScroll={(Platform.OS === 'ios')} enableOnAndroid={true}>
                    <View>
                        <View style={ styles.containerQuestionLeftTop }>
                            <View style={styles.containerQuestionLeftTopCircle}>
                                <View style={styles.containerQuestionLeftTopCircleInner}>
                                    <Text style= {texts.optionButtonTopCircleInnerText}>
                                        {this.props.questionObjProps.question_no}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.containerQuestionLeftTopQuestion}>
                                <Text style={texts.primary}>  
                                    { this.props.questionObjProps.question_text }
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.containerQuestionLeftMiddle }>
                            <Text style={texts.primary}>  
                                Image can appear here
                            </Text>
                        </View>
                        <View style={ styles.containerQuestionLeftBottom }>
                            <TouchableOpacity>
                                <View style={ buttons.optionButtonTop }>
                                    <View style={ buttons.optionButtonTopCircle }>
                                        <View style={ buttons.optionButtonTopCircleInner }>
                                            <Text style= {texts.optionButtonTopCircleInnerText}>
                                                A
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={buttons.optionButtonTopQuestion}>
                                        <Text style={texts.primary}>  
                                            {this.props.questionObjProps.options.a}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={ buttons.optionButtonTop }>
                                    <View style={buttons.optionButtonTopCircle}>
                                        <View style={buttons.optionButtonTopCircleInner}>
                                            <Text style= {texts.optionButtonTopCircleInnerText}>
                                                B
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={buttons.optionButtonTopQuestion}>
                                        <Text style={texts.primary}>  
                                            {this.props.questionObjProps.options.b}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={ buttons.optionButtonTop }>
                                    <View style={buttons.optionButtonTopCircle}>
                                        <View style={buttons.optionButtonTopCircleInner}>
                                            <Text style= {texts.optionButtonTopCircleInnerText}>
                                                C
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={buttons.optionButtonTopQuestion}>
                                        <Text style={texts.primary}>  
                                            {this.props.questionObjProps.options.c}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={ buttons.optionButtonTop }>
                                    <View style={buttons.optionButtonTopCircle}>
                                        <View style={buttons.optionButtonTopCircleInner}>
                                            <Text style= {texts.optionButtonTopCircleInnerText}>
                                                D
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={buttons.optionButtonTopQuestion}>
                                        <Text style={texts.primary}>  
                                            {this.props.questionObjProps.options.d}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}