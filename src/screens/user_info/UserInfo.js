// Summary: UserInfo Component is user profile page.
// Created: 11/10/2019 05:35 PM - NS (IN)
import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity 
} from 'react-native';
import { connect } from 'react-redux';

// Stylesheet
import styles from './style-user';

class UserInfo extends Component {
  
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {  
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.props.UserInfoReducer.name}</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Change Password</Text>  
              </TouchableOpacity>              
            </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {

  return {
      UserInfoReducer: state.UserInfoReducer.data
  };
}

export default connect(mapStateToProps)(UserInfo);