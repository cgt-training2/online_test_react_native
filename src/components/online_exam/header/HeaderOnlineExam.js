import React, { Component } from "react";
import {
    Text,
    TouchableOpacity, 
    View
} from 'react-native';

// Stylesheet
import { buttons, texts, styles } from './style-header-exam';

// Summary: Component for upper section of exam.
export default class HeaderOnlineExam extends Component{

    render(){
        return(
            <View style={ styles.containerTop}>
                <View style={ styles.TopLeft }>
                    <TouchableOpacity
                        // style = {styles.buttonTopLeft}
                        onPress = {
                            this.props.quitExamProps
                        }
                    >
                        <Text style={texts.headerText}>  
                            Quit
                        </Text>
                        <Text style={texts.headerText}>  
                            Test
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.TopMiddle }>
                    <Text style={texts.headerText}>  
                        IFAS
                    </Text>
                    <Text style={texts.headerSubText}>  
                        ( Institute For Advanced Studies ) 
                    </Text>
                </View>
                <View style={ styles.TopRight }>
                    <Text style={texts.headerText}>  
                        Timer
                    </Text>
                    <Text style={texts.headerText}>  
                        1:59:01
                    </Text>
                </View>
            </View>
        );
    }

}