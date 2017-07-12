import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/components/main.js';
import { createStore } from 'redux';

const defaultState = { value: 0 };
const reducer = ( state  = defaultState, action ) =>{
  if (action.type === 'UP') return { value: state.value + 1 };
  if (action.type === 'DOWN') return { value: state.value -1 };
  return state;
}
const store = createStore(reducer);

export default class ReduxDemo extends Component {
  render() {
    return (
      <Main />
    );
  }
}


AppRegistry.registerComponent('ReduxDemo', () => ReduxDemo);
