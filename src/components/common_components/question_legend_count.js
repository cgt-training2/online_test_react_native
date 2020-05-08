import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

// StyleSheet
import { styles } from './style_question_pallete_legend';

// Summary: This class will handle the count of different types of questions attempted.
export default class QuestionLegendCount extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text style={styles.Alert_Message}> 
                        Question Legend Count:
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
                        backgroundColor: '#2EB501',
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10    
                    }}>
                        <Text style={styles.Alert_Message}> 
                            22
                        </Text>
                    </View>
                    <View style ={{
                        backgroundColor: '#E64500',
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        marginRight:10,
                    }}>
                        <Text style={styles.Alert_Message}> 
                            11
                        </Text>
                    </View>
                    <View style ={{
                        backgroundColor: '#481D8D',
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10
                    }}>
                        <Text style={styles.Alert_Message}> 
                            10
                        </Text>
                    </View>
                </View>
                <View style = {{
                    flexDirection:'row',
                    width: '100%',                    
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: 10
                }}>
                    <View style ={{
                        backgroundColor: '#EBEBEB',
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10    
                    }}>
                        <Text style={styles.Alert_Message}> 
                            0
                        </Text>
                    </View>
                    <View style ={{
                        backgroundColor: '#E64500',
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        marginRight: 10    
                    }}>
                        <Text style={styles.Alert_Message}> 
                            10
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}