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

    constructor(props){
        super(props);
        this.state={
            answer:""    
        };
    }

    componentWillMount() {
        this.setState({
            answer: this.props.questionObjProps.descriptive_given_answer
        });
    }

    render(){
        return(
            <View style={ styles.containerQuestionLeftBottom }>
                <Text style={texts.primary}>
                    Your Answer:
                </Text>
                <TextInput 
                    style={{ 
                        height: 50, 
                        borderColor: 'gray', 
                        borderWidth: 1 
                    }}
                    onChangeText={ 
                        (value) => this.props.getFillInTheBlanksChangeTextEventProps(value)
                    }
                    onSubmitEditing = {(value)=>{
                        this.props.getFillInTheBlanksAnswerProps(this.props.descriptiveAnswerProps)
                    }}
                    value={this.props.descriptiveAnswerProps}
                >
                </TextInput>
            </View>
        );
    }
}