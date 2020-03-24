import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import AddTodo from '../containers/addTodo';

class Item extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <AddTodo navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Item;
