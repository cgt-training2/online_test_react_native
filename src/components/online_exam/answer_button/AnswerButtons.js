import React, { Component } from "react";
import {
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

// StyleSheet
import { buttons, texts, styles } from './style-answer-buttons';

// Summary: AnswerButton class contains the functionality of answer button s.
export default class AnswerButtons extends Component{
    componentDidMount(){
    }

    render(){
        return(
            <View style = { styles.containerAnswer }>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity 
                        style= { buttons.buttonContainer }
                        onPress = { this.props.actionDecreaseIndexChange }
                        disabled={ this.props.disablePrev 
                    }>
                        <Text style= { texts.buttonText }>
                            Prev
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity 
                        style= { buttons.buttonContainer }
                        onPress = { this.props.actionIncreaseIndexChange }
                        disabled={ 
                            this.props.disableNext 
                    }>
                        <Text style= { texts.buttonText }>
                            Save
                        </Text>
                        <Text style= { texts.buttonText }>
                            &
                        </Text>
                        <Text style= { texts.buttonText }>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity 
                        style= { buttons.buttonContainer }
                        onPress = { this.props.actionIncreaseIndexChange }
                        disabled={ 
                            this.props.disableNext 
                    }>
                        <Text style= { texts.buttonText }>
                            Save
                        </Text>
                        <Text style= { texts.buttonText }>
                            &
                        </Text>
                        <Text style= { texts.buttonText }>
                            Mark
                        </Text>
                        <Text style= { texts.buttonText }>
                            Review
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity 
                        style= { buttons.buttonContainer }
                        onPress = { this.props.actionIncreaseIndexChange }
                        disabled={ 
                            this.props.disableNext 
                    }>
                        <Text style= { texts.buttonText }>
                            Mark
                        </Text>
                        <Text style= { texts.buttonText }>
                            Review
                        </Text>
                        <Text style= { texts.buttonText }>
                            &
                        </Text>
                        <Text style= { texts.buttonText }>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity 
                        style= { buttons.buttonContainer }
                        onPress = { 
                            this.props.actionClearResponseFunction 
                    }>
                        <Text style= { texts.buttonText }>
                            Clear
                        </Text>
                        <Text style= { texts.buttonText }>
                            Response
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity style= { buttons.buttonContainer }>
                        <Text style= { texts.buttonText }>
                            Review
                        </Text>
                        <Text style= { texts.buttonText }>
                            &
                        </Text>
                        <Text style= { texts.buttonText }>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.containerAnswerChild }>
                    <TouchableOpacity 
                        style= { buttons.buttonContainer }
                        onPress = { this.props.actionIncreaseIndexChange }
                        disabled={ 
                            this.props.disableNext 
                    }>
                        <Text style= { texts.buttonText }>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}