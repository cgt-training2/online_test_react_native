import React, { Component } from "react";
import {
    Text,
    TouchableOpacity, 
    View
} from 'react-native';

// Components
import QuestionPalleteLegend from '../../common_components/question_pallete_legend';

// Stylesheet
import { texts, styles } from './style-header-exam';

// Summary: Component for upper section of exam.
export default class HeaderOnlineExam extends Component{

    render(){
        return(
            <View style={ styles.containerTop}>
                <View style={ styles.TopLeft }>
                    <TouchableOpacity
                        onPress = {
                            this.props.quitExamProps
                    }>
                        <Text style={texts.headerText}>  
                            Quit Test
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.TopMiddle }>
                    <Text style={texts.headerText}>  
                        Timer 1:59:40
                    </Text>
                </View>
                <View style={ styles.TopRight }>
                    <TouchableOpacity
                        onPress = {()=>
                            this.props.openQuestionLegendProps()
                    }>
                        <Text style={texts.headerText}>  
                            Question Pallete
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}