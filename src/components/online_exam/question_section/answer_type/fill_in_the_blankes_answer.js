import React, { Component } from "react";
import { 
    Text,
    TextInput,
    View 
} from "react-native";

//StyleSheet
import { 
    buttons, texts, styles 
} from '../style-question-section-left'; 

// Summary: This class will contain fill in the blankes like feature.
export default class FillInTheBlankesAnswer extends Component{

    render(){
        return(
            <View style={ styles.containerQuestionLeftBottom }>
                <Text style={texts.primary}>
                    Your Answer:
                </Text>
                <TextInput  style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}>

                </TextInput>
            </View>
        );
    }
}