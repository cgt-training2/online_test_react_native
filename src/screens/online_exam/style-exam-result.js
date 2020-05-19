import {
    Platform,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        width: '80%',
        height: 60,
        marginTop: 30,  
        backgroundColor: '#ffbd27',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        width:Platform.OS === 'ios' ? 'auto' : 100,
        textAlign:Platform.OS === 'ios' ? 'auto' : 'center'
    },
});

export { styles };