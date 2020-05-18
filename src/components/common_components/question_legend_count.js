import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

// Enums
import { color_code_answer_button } from '../../enums/global_colors';

// StyleSheet
import { styles } from './style_question_pallete_legend';
import { stylesQuestion } from './style_question_legend_count';

// Summary: This class will handle the count of different types of questions attempted.
export default class QuestionLegendCount extends Component{
    render(){
        return(
            <View>
                {
                    this.props.saveCountProps >=0 
                    &&
                    <View>
                        <Text style={[ stylesQuestion.Alert_Message, { color: '#000000' } ]}> 
                            Legend:
                        </Text>
                    </View>
                }   

                <View style = { [ stylesQuestion.containerRowMain ]}> 
                    <View style = { stylesQuestion.containerRowInner }>                
                        <View style ={[ stylesQuestion.coloredContainer, {
                            backgroundColor: color_code_answer_button.saveAndNext,
                        }]}>
                            <Text style={stylesQuestion.Alert_Message}> 
                                { this.props.saveCountProps >=0 ? this.props.saveCountProps : null }
                            </Text>
                        </View>
                        <View>    
                            <Text style={stylesQuestion.Alert_Message_Text}> 
                                Answered
                            </Text>
                        </View>
                    </View>
                    <View style = { stylesQuestion.containerRowInnerRight }>
                        <View style ={[ stylesQuestion.coloredContainer, {
                            backgroundColor: color_code_answer_button.next,
                        }]}>
                            <Text style={stylesQuestion.Alert_Message}> 
                                { this.props.notAnsweredCountProps >= 0 ? this.props.notAnsweredCountProps : null }
                            </Text>
                        </View>
                        <View>
                            <Text style={stylesQuestion.Alert_Message_Text}> 
                                Not Answered
                            </Text>
                        </View>
                    </View>
                </View>
                <View style = { [ stylesQuestion.containerRowMain ]}>
                    <View style = { [stylesQuestion.containerRowInner ] }>                    
                        <View style ={[ stylesQuestion.coloredContainer, {
                            backgroundColor: color_code_answer_button.saveAndMarkReview,
                        }]}>
                            <Text style={stylesQuestion.Alert_Message}> 
                                { this.props.markReviewCountProps >= 0 ? this.props.markReviewCountProps : null }
                            </Text>
                        </View>
                        <View>
                            <Text style={stylesQuestion.Alert_Message_Text}> 
                                Marked
                            </Text>
                        </View>
                    </View>
                    <View style = { stylesQuestion.containerRowInnerRight }>
                        <View style ={[ stylesQuestion.coloredContainer, {
                            backgroundColor: color_code_answer_button.not_answered,
                        }]}>
                            <Text style={[stylesQuestion.Alert_Message, { color: '#000000' }]}> 
                            { this.props.saveAndMarkReviewCountProps >= 0 ? 0 : null }
                            </Text>
                        </View>
                        <View>
                            <Text style={stylesQuestion.Alert_Message_Text}> 
                                Not Visited
                            </Text>
                        </View>
                    </View>
                </View>
                <View style = { [ stylesQuestion.containerRowMain ]}>
                    <View style = { stylesQuestion.containerRowInner }>
                        <View style ={[ stylesQuestion.coloredContainer, {
                            backgroundColor: color_code_answer_button.saveAndMarkReview,
                        }]}>
                            <Text style={stylesQuestion.Alert_Message}> 
                                { this.props.saveAndMarkReviewCountProps >= 0 ? this.props.saveAndMarkReviewCountProps : null }
                            </Text>
                        </View>
                        <View>
                            <Text style={stylesQuestion.Alert_Message_Text}> 
                                Marked & Answered
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}