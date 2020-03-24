import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import AddTodo from '../containers/addTodo';

class Item extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AddTodo />
      </View>
    );
  }
}

export default Item;
