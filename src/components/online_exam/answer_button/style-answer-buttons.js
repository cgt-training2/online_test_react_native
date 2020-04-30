import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    containerAnswer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        flexDirection: 'row',
        borderColor: '#C9D7DD',
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
        color:'#FF6347',    
    },
});
const buttons = StyleSheet.create({

    buttonContainer: {
        backgroundColor: '#C9D7DD',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:40,
        height: 80
    }
});



export { buttons, texts, styles };