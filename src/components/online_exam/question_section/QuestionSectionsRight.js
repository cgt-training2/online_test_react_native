import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

// Dependency
// import { ScrollView } from 'react-native-gesture-handler';

// StyleSheet
import { buttons, texts, styles } from './style-question-section-right';

// Summary: This section will contain the functionality for questions pallete.
export default class QuestionSectionRight extends Component {

    // {
    //     "answer_multiselect": [], "descriptive_answer": false, "descriptive_given_answer": "", 
    //     "descriptive_rigth_answer": "", "mark_review": false, "multiselect": false, 
    //     "options": {"a": "Wednesday", "b": "Monday", "c": "Thursday", "d": "Friday"}, 
    //     "question_no": 1, "question_text": "What was the day of week on 17th June 1998?", 
    //     "right_answer": "b", "right_answer_multiselect": [], "save": false, 
    //     "save_mark_review": false, "selected_option": "a", answered: false
    // }
    
    constructor(props){
        super(props);
    }

    render(){

        // console.log("QuestionSectionRight extends Component");
        // console.log(this.props.questionsObjProp);
        
        // Summary: Map will generate the for loop on array of object and by the 
        //          help of that we dynamically create buttons.

        let buttonsListArr = this.props.questionsObjProp.map(buttonInfo => (
            <View>
                <TouchableOpacity key={buttonInfo.question_no} style = { [ buttons.buttonsQuestionPalleteQuestions, { backgroundColor: buttonInfo.question_pallete_color } ] }>
                    <Text style={{
                        color: buttonInfo.answered == true ? '#FFFFFF' : '#000000'
                    }}>  
                        {buttonInfo.question_no}
                    </Text>
                </TouchableOpacity>
                { 
                    buttonInfo.save_mark_review 
                        && 
                    <View style={{ 
                        height: 10, 
                        width: 30,
                        alignItems: 'flex-end',
                        marginTop: -10
                    }}>
                        <View
                            style={{
                                backgroundColor: '#2DBC01', 
                                borderRadius: 5, 
                                height: 10, 
                                width: 10,
                        }}>
                        </View>
                    </View>     
                }
            </View>
        ));
        return(
            <View>
                <ScrollView contentContainerStyle={{flexGrow:1}} style = {{ marginTop: 5 }}>
                    <View>
                        <Text style={texts.questionPaletteText}>
                            Question
                        </Text>       
                        <Text style={texts.questionPaletteText}>
                            Palette
                        </Text>
                        <Text style={texts.questionPaletteText}>
                            Info
                        </Text>
                    </View>
                    <View style = { styles.containerQuestionPalleteQuestions }>
                        { buttonsListArr }
                    </View>    
                </ScrollView>
            </View>
        );
    }
}