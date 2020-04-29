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
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>  
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                </Text>
                                <Text style={texts.primary}>
                                    LAST Ipsum
                                </Text>
                            </View>
                        </KeyboardAwareScrollView>
                    </View> 
                    <View style={ styles.containerQuestionRight }>
                        <ScrollView>
                            <Text style={texts.questionPaletteText}>
                                Question
                            </Text>       
                            <Text style={texts.questionPaletteText}>
                                Palette
                            </Text>
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