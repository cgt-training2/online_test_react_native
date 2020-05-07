import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

// Component
import QuestionPalleteLegend from '../../common_components/question_pallete_legend';

// StyleSheet
import { buttons, texts, styles } from './style-question-section-right';

// Summary: This section will contain the functionality for questions pallete.
export default class QuestionSectionRight extends Component {

    constructor(props){
        super(props);
    }

    render(){

        // Summary: Map will generate the for loop on array of object and by the 
        // help of that we dynamically create buttons.

        let buttonsListArr = this.props.questionsObjProp.map(buttonInfo => (
            <View>
                <TouchableOpacity 
                    key={ buttonInfo.question_no } 
                    style = { 
                        [ buttons.buttonsQuestionPalleteQuestions, { backgroundColor: buttonInfo.question_pallete_color } 
                    ]}
                    onPress = {
                        () => this.props.navigationOfQuestionProps(buttonInfo.question_no)        
                }>
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
            <View style = { styles.containerQuestionPalleteQuestions }>
                { buttonsListArr }
            </View>    
        );
    }
}