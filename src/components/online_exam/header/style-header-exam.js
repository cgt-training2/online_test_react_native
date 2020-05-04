import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

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
    }
});

const texts = StyleSheet.create({
   
    headerText: {
        fontSize: 16,
        textAlign:'center',
        color:'#FDF7FF',    
    },
    headerSubText: {
        fontSize: 14,
        textAlign:'center',
        color:'#FDF7FF',    
    }
});
const buttons = StyleSheet.create({
    buttonTopLeft: {
        backgroundColor: '#F98144',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100
    }
});



export { buttons, texts, styles };