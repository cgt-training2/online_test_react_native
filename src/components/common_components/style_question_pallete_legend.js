import {
  Platform,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
 
	MainContainer :{
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: (Platform.OS == 'ios') ? 20 : 0,
	},
	Alert_Main_View:{

		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor : '#FFFFFF', 
		height: 400 ,
		width: '90%',
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius:7,
	},
	Alert_Title_View: {
		flex:.5,
		backgroundColor : '#009688',
		width: '100%'
	},
	Alert_Title:{

		fontSize: 25, 
		color: '#FFFFFF',
		textAlign: 'center',
		padding: 10,
		backgroundColor : '#009688',
		width: '100%',
		// height: '28%'
	},
	Main_content_view:{
		flex: 3,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	Alert_Message:{

		fontSize: 22, 
		color: '#000000',
		textAlign: 'center',
		padding: 10,
		// height: '42%'
	},
	buttonStyle: {
		
		width: '100%',
		// height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor : '#009688',

	},
	TextStyle:{
		color: '#FFFFFF',
		textAlign:'center',
		fontSize: 22,
		marginTop: -5
	}
});

export { styles };