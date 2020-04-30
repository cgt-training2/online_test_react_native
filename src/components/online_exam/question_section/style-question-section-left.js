import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    containerQuestion: {
        flex: 5,
        flexDirection: 'row',
        borderColor: '#C9D7DD'
    },
    containerQuestionLeft: {
        flex: 4
    },
    containerQuestionLeftTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerQuestionLeftTopCircle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerQuestionLeftTopCircleInner: {
        height: 25,
        width: 25,
        backgroundColor: '#000000',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerQuestionLeftTopQuestion: {
        flex: 7,
        marginLeft: 5
    },
    containerQuestionLeftBottom: {
        flex: 1,
        flexDirection: 'column'
    },
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
    optionButtonTopCircleInnerText: {
        fontSize: 14,
        textAlign:'center',
        color:'#FDF7FF'
    }
});
const buttons = StyleSheet.create({

    optionButtonTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C9D7DD',
        marginTop: 2,
        marginBottom: 2,
    },
    optionButtonTopCircle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionButtonTopCircleInner: {
        height: 25,
        width: 25,
        backgroundColor: '#35C8C8',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionButtonTopQuestion: {
        flex: 7,
        marginLeft: 5
    },
});



export { buttons, texts, styles };