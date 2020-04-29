// Summary: This file is Content Component which can be used for the Side Menu of Drawer Navigation.
// Created: 11/10/2019 12:00 PM - VS (IN)

import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { 
    Text, 
    View,   
    ScrollView,
    TouchableOpacity,
    Image 
} from 'react-native';

// Navigation
import { DrawerActions } from 'react-navigation-drawer';

// Stylesheet
import { styles } from './style-menu';

// Utils
import { _retrieveData } from  '../../utils/async_storage/async-storage-functions';

export default class DrawerContentComponents extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: ''
        };
        this.navigateToScreen = this.navigateToScreen.bind(this);
        
    }
    
    componentwillUpdate(){
        
    }

    componentWillMount(){
        
        // Retrieve name of user from Async Storage.
        _retrieveData().then((res) =>{
            this.state.name = res;
        });
    }

    componentWillUnmount() {
        this.state.name = '';
    }

    // navigateToScreen function swicthes between different screens of the navigators
    // Created: 09/11/2019 12:00 pM - VS (IN)
    navigateToScreen = ( route ) =>() => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
        this.props.navigation.dispatch(navigateAction);
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.navigateToScreen('User')}>
                    <View style={styles.headerMenuMain}>
                        <View style={styles.headerMenu}>
                            <Image source={require('../../assets/images/imageThumbnail.png')} />
                            <Text style={styles.menuHeaderText}>
                                {this.state.name}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding:30 }}>
                    <View>
                        <Text style={styles.menuItemText} onPress={this.navigateToScreen('Home')}>
                            Home
                        </Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.menuItemText} onPress={this.navigateToScreen('Test')}>
                            Online_test
                        </Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.menuItemText} onPress={this.navigateToScreen('AuthStack')} >
                            Logout
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

