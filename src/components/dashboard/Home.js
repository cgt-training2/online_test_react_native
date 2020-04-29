// Summary: This file is dashboard Component which can be used in all modules.
// Created: 11/09/2019 12:00 PM - VS (IN)

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

//Stylesheet
import { styles, texts } from './style-home';  

class HomeJSXText extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={texts.primary}>  
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </Text>
        <Text style={texts.primary}>
          Lorem Ipsum
        </Text>
        <Text style={texts.primary}>  
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </Text>
        <Text style={texts.secondary}>
          Lorem Ipsum 
        </Text> 
        <Text style={texts.third}>
          Lorem Ipsum 
        </Text>
        <Text style={texts.third}>
          Lorem Ipsum Lorem Ipsum 
        </Text>   
      </View>
    );
  }
} 

export default HomeJSXText;



