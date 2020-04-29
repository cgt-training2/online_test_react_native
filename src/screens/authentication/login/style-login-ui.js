import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';  
export const styles = StyleSheet.create(
{
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    // backgroundColor: '#f8f8f8',
    flex: 1,
    alignItems: 'center',
    marginTop:30
  },
  logo:{
    display:"flex",
    // width:300,
    // height:180,
    marginTop:20
  },
  inputFirst:{
    width: 300,
    height: 60,
    borderWidth:5,

    borderColor: '#e7e7e7',
    borderRadius:8,
    backgroundColor: '#fff',
    paddingLeft: 10
  },
  input: {
    width: 300,
    height: 60,
    marginTop: 30,
    borderWidth:2,
    borderColor: '#e7e7e7',
    borderRadius:8,
    backgroundColor: '#fff',
    paddingLeft: 10,

  },
  fontWelcome:{
    marginTop:20,
    marginBottom:20,
    fontSize:Dimensions.get('window').width <380 ? 25 : 35,
    color: '#47287E'
  },
  buttonContainer: {
    width: 300,
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
  scroll:{
    paddingTop:Platform.OS === 'ios' ? 'auto' : 10,
  },
  viewBtn:{
    flexDirection: 'column',
  }
});