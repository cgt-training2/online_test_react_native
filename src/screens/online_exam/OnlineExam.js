import React, { Component } from 'react';
import {
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

// Dependency
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Orientation from 'react-native-orientation';

// Style sheet
import {buttons, texts, styles} from './style-online-exam';
import { ScrollView } from 'react-native-gesture-handler';

// Summary: This class will contain all the functionality of the online test.
export default class OnlineExam extends Component{

    // No Navigation Will be shown for thiscomponent
    static navigationOptions = {
        header: null
    }
    // Summary: It will lock the screen 
    componentWillMount(){
        console.log("componentWillMount()");
        // Orientation.lockToLandscape();
    }
    
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.containerTop}>
                    <View style={ styles.TopLeft }>
                        <Text style={texts.headerText}>  
                            Quit
                        </Text>
                        <Text style={texts.headerText}>  
                            Test
                        </Text>
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
                <View style = { styles.containerQuestion}>
                    <View style={ styles.containerQuestionLeft }>
                        <KeyboardAwareScrollView enableAutomaticScroll={(Platform.OS === 'ios')} enableOnAndroid={true}>
                            <View>
                                <View style={ styles.containerQuestionLeftTop }>
                                    <View style={styles.containerQuestionLeftTopCircle}>
                                        <View style={styles.containerQuestionLeftTopCircleInner}>
                                            <Text style= {texts.optionButtonTopCircleInnerText}>
                                                8
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.containerQuestionLeftTopQuestion}>
                                        <Text style={texts.primary}>  
                                            What was the day of week on 17th June 1998?
                                        </Text>
                                    </View>
                                </View>
                                <View style={ styles.containerQuestionLeftMiddle }>
                                    <Text style={texts.primary}>  
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </Text>
                                </View>
                                <View style={ styles.containerQuestionLeftBottom }>
                                    <TouchableOpacity>
                                        <View style={ buttons.optionButtonTop }>
                                            <View style={ buttons.optionButtonTopCircle }>
                                                <View style={ buttons.optionButtonTopCircleInner }>
                                                    <Text style= {texts.optionButtonTopCircleInnerText}>
                                                        A
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={buttons.optionButtonTopQuestion}>
                                                <Text style={texts.primary}>  
                                                    option 1
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ buttons.optionButtonTop }>
                                            <View style={buttons.optionButtonTopCircle}>
                                                <View style={buttons.optionButtonTopCircleInner}>
                                                    <Text style= {texts.optionButtonTopCircleInnerText}>
                                                        B
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={buttons.optionButtonTopQuestion}>
                                                <Text style={texts.primary}>  
                                                    option 2
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ buttons.optionButtonTop }>
                                            <View style={buttons.optionButtonTopCircle}>
                                                <View style={buttons.optionButtonTopCircleInner}>
                                                    <Text style= {texts.optionButtonTopCircleInnerText}>
                                                        C
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={buttons.optionButtonTopQuestion}>
                                                <Text style={texts.primary}>  
                                                    option 3
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={ buttons.optionButtonTop }>
                                            <View style={buttons.optionButtonTopCircle}>
                                                <View style={buttons.optionButtonTopCircleInner}>
                                                    <Text style= {texts.optionButtonTopCircleInnerText}>
                                                        D
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={buttons.optionButtonTopQuestion}>
                                                <Text style={texts.primary}>  
                                                    option 4
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View> 
                    <View style={ styles.containerQuestionRight }>
                        <ScrollView contentContainerStyle={{flexGrow:1}} style = {{ marginTop: 5 }}>
                            <View>
                                <Text style={texts.questionPaletteText}>
                                    Question
                                </Text>       
                                <Text style={texts.questionPaletteText}>
                                    Palette
                                </Text>
                                <Text style={texts.questionPaletteText}>
                                    Info
                                </Text>
                            </View>
                            <View style = { styles.containerQuestionPalleteQuestions }>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        1
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        2
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        3
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        4
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        5
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        6
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        7
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        8
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        9
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        11
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        12
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        13
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        14
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = { buttons.buttonsQuestionPalleteQuestions }>
                                    <Text>  
                                        15
                                    </Text>
                                </TouchableOpacity>
                            </View>    
                        </ScrollView>
                    </View>     
                </View>
                <View style = { styles.containerAnswer }>
                    <View style = { styles.containerAnswerChild }>
                        <TouchableOpacity style= { buttons.buttonContainer}>
                            <Text style= { texts.buttonText }>
                                Prev
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = { styles.containerAnswerChild }>
                        <TouchableOpacity style= { buttons.buttonContainer}>
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
                        <TouchableOpacity style= { buttons.buttonContainer}>
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
                        <TouchableOpacity style= { buttons.buttonContainer}>
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
                        <TouchableOpacity style= { buttons.buttonContainer}>
                            <Text style= { texts.buttonText }>
                                Clear
                            </Text>
                            <Text style= { texts.buttonText }>
                                Response
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = { styles.containerAnswerChild }>
                        <TouchableOpacity style= { buttons.buttonContainer}>
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
                        <TouchableOpacity style= { buttons.buttonContainer}>
                            <Text style= { texts.buttonText }>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
