import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    Keyboard,
    Text, 
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

// Component
import CheckBox from '../../common_components/check_box';
import FillInTheBlankesAnswer from './answer_type/fill_in_the_blankes_answer';
import OptionAnswer from './answer_type/option_answer';
import ScaledImage from '../../../utils/image/image_size';

// Stylesheet
import { texts, styles } from './style-question-section-left';

// Summary: This section will contain the functionality for questions.
export default class QuestionSectionLeft extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            checkSelected: [],           
        };

        this.displayImage = this.displayImage.bind(this);    
        this.displayAnswerOption = this.displayAnswerOption.bind(this);
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    }
  
    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
        this.keyboardDidShowListener.remove();
    }
  
    keyboardDidShow = () => {
        //Fix your view for when a keyboard shows
        this.props.handleKeyboardShowEventProps();
    };
  
    keyboardDidHide = () => {
        //Fix your view for when a keyboard hides
        this.props.handleKeyboardHideEventProps();
    };
    
    // Summary: this function will handle the conditional rendering.
    displayImage(){
        if(this.props.questionObjProps.image_url == ""){
            return <Text style = {{ marginTop: '50%' }}> </Text>; 
        }else{
            let widthParam = Dimensions.get('window').width;
            let heightParam = Dimensions.get('window').height;
            heightParam = (widthParam / 2) + ( heightParam / 8 );
            return <Image source={{ uri: this.props.questionObjProps.image_url }} style = {{ width: widthParam, height: heightParam, resizeMode : 'contain', margin: 5 }} />;
        //    <ScaledImage style= {{ marginTop: 5 }} uri={ this.props.questionObjProps.image_url } width={ Dimensions.get('window').width}/> 
        
        }
    }

    // Summary: This function will display mcqoption or textInput for giving answer.
    displayAnswerOption(){

        if(this.props.questionObjProps.descriptive_answer == true){
            return <FillInTheBlankesAnswer 
                getFillInTheBlanksAnswerProps = { this.props.getFillInTheBlanksAnswerProps }
                questionObjProps = { this.props.questionObjProps }
                descriptiveAnswerProps = { this.props.descriptiveAnswerProps }
                getFillInTheBlanksChangeTextEventProps = { this.props.getFillInTheBlanksChangeTextEventProps }
            />;
        }else if(this.props.questionObjProps.multiselect == true){
            if(this.props.questionObjProps.answer_multiselect.length == 0){
                console.log("this.props.questionObjProps.answer_multiselect.length == 0");
                const checkboxs = this.props.questionObjProps.options.map(({id, option}) =>
                    <CheckBox 
                        style={{ marginTop: 25 }} 
                        key={id} 
                        value={option}
                        selected = { false }
                        clicked={(id, isCheck) => this.toggleCheckBox(id, option, isCheck)}
                    >
                    </CheckBox>
                );
                return checkboxs;
            }else{
                const checkboxs = this.props.questionObjProps.options.map(({id, option}) =>
                this.props.questionObjProps.answer_multiselect.indexOf(option) > -1 ?
                        <CheckBox 
                            style={{ marginTop: 25 }} 
                            key={ id } 
                            value={option}
                            selected = { true }
                            clicked={(id, isCheck) => this.toggleCheckBox(id, option, isCheck)}
                        >
                        </CheckBox>
                        :
                        <CheckBox 
                            style={{ marginTop: 25 }} 
                            key={ id } 
                            value={ option }
                            selected = { false }
                            clicked={(id, isCheck) => this.toggleCheckBox(id, option, isCheck)}
                        >
                        </CheckBox>
                );
                return checkboxs;
            }

        }else{
            return <OptionAnswer 
                getOptionIdProps = { this.props.getOptionIdProps }
                optionButtonColorProps = { this.props.optionButtonColorProps }
                questionObjProps = { this.props.questionObjProps }
            />;
        }
    }

    // Summary: This will give us the selected values for the checkbox.
    toggleCheckBox = (id, option, isCheck) => {
        let { checkSelected } = this.state;
        if (isCheck) {
          checkSelected.push(option);
        } else { // remove element
          var index = checkSelected.indexOf(option);
          if (index > -1) {
            checkSelected.splice(index, 1);
          }
        }
    
        this.setState({ checkSelected });
        // console.log(this.state.checkSelected); // logging
        this.props.getCheckBoxAnswerProps(this.state.checkSelected);
    }

    render(){
       
        return(
            <View>
                {/* <KeyboardAwareScrollView enableAutomaticScroll={(Platform.OS === 'ios')} enableOnAndroid={true}> */}
                <ScrollView contentContainerStyle= {{ 
                    flexGrow: 1
                }}>
                    <View>
                        <View style={ styles.containerQuestionLeftTop }>
                            <View style={styles.containerQuestionLeftTopCircle}>
                                <View style={styles.containerQuestionLeftTopCircleInner}>
                                    <Text style= {texts.optionButtonTopCircleInnerText}>
                                        {this.props.questionObjProps.question_no}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.containerQuestionLeftTopQuestion}>
                                <Text style={texts.primary}>  
                                    { this.props.questionObjProps.question_text }
                                </Text>
                            </View>
                        </View>
                        <View>
                            {
                                this.displayImage()
                            }
                        </View>
                        {/* Answer option Will display here based on the condition handled in displayAnswerOption() */}
                        <View style={{  
                        }}>
                            {
                                this.displayAnswerOption()
                            }
                        </View>
                    </View>
                </ScrollView>
                {/* </KeyboardAwareScrollView> */}
            </View>
        );
    }
}