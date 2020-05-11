import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

// Enums
import { color_code_answer_button } from '../../enums/global_colors';

// StyleSheet
import { styles } from './style_question_pallete_legend';

// Summary: This class will handle the count of different types of questions attempted.
export default class QuestionLegendCount extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text style={[ styles.Alert_Message, { color: '#000000' } ]}> 
                        Legend:
                    </Text>
                </View>
                <View style = {{
                    flexDirection:'row',
                    width: '100%',                    
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <View style ={{
                        backgroundColor: color_code_answer_button.saveAndNext,
                        width: 100,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 5    
                    }}>
                        <Text style={styles.Alert_Message}> 
                            { this.props.saveCountProps }
                        </Text>
                        <Text style={styles.Alert_Message_Text}> 
                            Answered
                        </Text>
                    </View>
                    <View style ={{
                        backgroundColor: color_code_answer_button.next,
                        width: 100,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 5
                    }}>
                        <Text style={styles.Alert_Message}> 
                            { this.props.notAnsweredCountProps }
                        </Text>
                        <Text style={styles.Alert_Message_Text}> 
                            Not Answered
                        </Text>
                    </View>
                </View>
                <View style = {{
                    flexDirection:'row',
                    width: '100%',                    
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: 30
                }}>
                    <View style ={{
                        backgroundColor: color_code_answer_button.saveAndMarkReview,
                        width: 100,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 5
                    }}>
                        <Text style={styles.Alert_Message}> 
                            { this.props.markReviewCountProps }
                        </Text>
                        <Text style={styles.Alert_Message_Text}> 
                            Marked
                        </Text>
                    </View>
                    <View style ={{
                        backgroundColor: color_code_answer_button.not_answered,
                        width: 100,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 5    
                    }}>
                        <Text style={[styles.Alert_Message, { color: '#000000' }]}> 
                            0
                        </Text>
                        <Text style={styles.Alert_Message_Text}> 
                            Not Visited
                        </Text>
                    </View>
                </View>
                <View style = {{
                    flexDirection:'row',
                    width: '100%',                    
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: 30,
                    marginBottom: 40
                }}>
                    <View style ={{
                        backgroundColor: color_code_answer_button.saveAndMarkReview,
                        width: 100,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 5
                    }}>
                        <Text style={styles.Alert_Message}> 
                            { this.props.saveAndMarkReviewCountProps }
                        </Text>
                        <Text style={styles.Alert_Message_Text}> 
                            Marked & Answered
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}