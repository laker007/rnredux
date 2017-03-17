/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import reducer from './src/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './src/App';


const store = createStore(reducer)

export default class rnredux extends Component {

  render() {
    return (

      <Provider store ={store}>
        <App/>
      </Provider>

    );
  }
}

AppRegistry.registerComponent('rnredux', () => rnredux);
