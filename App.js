import React from 'react';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './src/components/navigation/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/root-reducers';
import thunk from 'redux-thunk';

/*
Redux Thunk middleware allows you to write action creators that return a function instead of an action.
More info related to thunk is available on this link https://www.npmjs.com/package/redux-thunk
*/
//The Store is the object that brings actions together. 
// Created By: Vaibhav Sharma

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />      
            </Provider>
        );
    }
}

//Adding AppNavigator as default App Container so that all the operation related to navigation will be peformed.
// Created By: Vaibhav Sharma 

const AppContainer = createAppContainer(AppNavigator);

export default App;
