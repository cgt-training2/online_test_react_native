import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

// Dependency
import { ScrollView } from 'react-native-gesture-handler';

// StyleSheet
import { buttons, texts, styles } from './style-question-section-right';

// Summary: This section will contain the functionality for questions pallete.
export default class QuestionSectionRight extends Component{

    // {
    //     "answer_multiselect": [], "descriptive_answer": false, "descriptive_given_answer": "", 
    //     "descriptive_rigth_answer": "", "mark_review": false, "multiselect": false, 
    //     "options": {"a": "Wednesday", "b": "Monday", "c": "Thursday", "d": "Friday"}, 
    //     "question_no": 1, "question_text": "What was the day of week on 17th June 1998?", 
    //     "right_answer": "b", "right_answer_multiselect": [], "save": false, 
    //     "save_mark_review": false, "selected_option": "a"
    // }
    
    constructor(props){
        super(props);
    }

    render(){
        
        // Summary: Map will generate the for loop on array of object and by the 
        //          help of that we dynamically create buttons.

        let buttonsListArr = this.props.questionsObjProp.map(buttonInfo => (
            <TouchableOpacity key={buttonInfo.question_no} style = { buttons.buttonsQuestionPalleteQuestions }>
                <Text>  
                    {buttonInfo.question_no}
                </Text>
            </TouchableOpacity>
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