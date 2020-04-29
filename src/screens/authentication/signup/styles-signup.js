import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    input: {
      width: '80%',
      height: 50,
      backgroundColor: 'white',
      borderColor:'black',
      borderWidth:0.5,
      margin: 10,
      padding: 8,
      color: 'black',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: '500',
    },
    signupButton: {
        backgroundColor: '#ffbd27',
        width: '80%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
      },
      signupText: {
        color: 'white',
        fontSize: 18,
        
      },
      tncImage: {
        width: 40,
        height: 40,        
      },
    container: {
      flex: 1,
      top:20,
      alignItems: 'center',
    },
    tncContainer: {
        flexDirection: 'row',
        margin:20 ,
        justifyContent: 'flex-start',
      }
  })