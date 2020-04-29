import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5
    },
    containerTop: {
        flex: 1,
        flexDirection: 'row'
    },
    TopLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F98144'
    },
    TopMiddle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29B493'
    },
    TopRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F98144'
    },
    containerQuestion: {
        flex: 5,
        flexDirection: 'row',
        borderColor: '#C9D7DD'
    },
    containerQuestionLeft: {
        flex: 4
    },
    containerQuestionRight: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C9D7DD'

    },
    containerAnswer: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    containerAnswerChild: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const texts = StyleSheet.create({
    
    primary:{
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 20,
        marginTop:10,
        marginBottom:10  
    },
    buttonText: {
        fontSize: 11,
        textAlign:'center',
        color:'#FF6347',    
    },
    headerText: {
        fontSize: 16,
        textAlign:'center',
        color:'#FDF7FF',    
    },
    headerSubText: {
        fontSize: 14,
        textAlign:'center',
        color:'#FDF7FF',    
    },
    questionPaletteText: {
        fontSize: 14,
        textAlign:'center',
        color:'#FF6347',    
    }
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