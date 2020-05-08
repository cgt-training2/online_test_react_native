import {StyleSheet} from 'react-native';

// Enum
import { answer_button_section } from '../../../enums/global_colors';

const styles = StyleSheet.create({

    containerAnswer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        flexDirection: 'row',
        borderColor: answer_button_section.containerBorderColor,
        borderWidth: 2
    },
    containerAnswerChild: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const texts = StyleSheet.create({
    
    buttonText: {
        fontSize: 11,
        textAlign:'center',
        color: answer_button_section.buttonTextColor,    
    },
});
const buttons = StyleSheet.create({

    buttonContainer: {
        backgroundColor: answer_button_section.buttonBackgroundColor,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:40,
        height: 80
    }
});



export { buttons, texts, styles };