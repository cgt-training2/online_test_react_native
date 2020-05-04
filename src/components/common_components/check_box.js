import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Summary: This class will provide the functionality for checkbox.
export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        console.log("export default class CheckBox extends Component");
        console.log(this.props.selected);
        this.state = {
            isCheck: this.props.selected
        };
    }
    
    // Summary: checkClicked function will handle the click event. 
    checkClicked = async () => {
        await this.setState(prevState => ({
            isCheck: !prevState.isCheck,
        })); // setState is async function.
        // Call function type prop with return values.
        this.props.clicked(this.props.value, this.state.isCheck);
    }
  
    render() {
      return (
        <View style={{ flexDirection : 'row' }}>
            <TouchableOpacity onPress={this.checkClicked} style={this.props.style}>
                <View style={{
                    height: 24,
                    width: 24,
                    borderWidth: 2,
                    borderColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        height: 12,
                        width: 12,
                        backgroundColor: this.state.isCheck ? '#000' : '#FFF',
                    }} />
                </View>
            </TouchableOpacity>
            <Text style = {{ marginTop: 25, marginLeft: 5 }}>
                { this.props.value }
            </Text>
        </View>
      )
    }
  }