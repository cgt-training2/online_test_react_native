import React, { Component } from 'react';
import {
    Alert,
    Modal, 
    Text,  
    TouchableOpacity,
    View, 
} from 'react-native';
 
// Stylesheet
import { styles } from './style_question_pallete_legend';

// Summary: This class will handle the functionality for the question pallete legend.
export default class QuestionPalleteLegend extends Component {
 
    constructor(props) {
        super(props);
    }

    render() {   
        return (
            <View style={styles.MainContainer}>
                <Modal
                    visible={ this.props.modalVisibleProp }
                    transparent={ true }
                    animationType={ "slide" 
                }>
                    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.Alert_Main_View}>
                            <Text style={styles.Alert_Title}>
                                Questions Summary
                            </Text>
                            <View style={{ width: '100%', height: 2, backgroundColor: '#000000'}}>
                            </View>    
                            <Text style={styles.Alert_Message}> 
                                Are You Sure(Alert Dialog Message). 
                            </Text>
                            <Text style={styles.Alert_Message}> 
                                Are You Sure(Alert Dialog Message). 
                            </Text>
                            <View style={{ width: '100%', height: 1, backgroundColor: '#000000'}}>
                            </View>    
                            <View style={{flexDirection: 'row', height: '30%'}}>
                                <TouchableOpacity 
                                    style={ styles.buttonStyle } 
                                    onPress={() => {
                                        this.props.openQuestionLegendProps()
                                    }} 
                                    activeOpacity={ 0.7 
                                }>
                                    <Text style={styles.TextStyle}> CANCEL </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
