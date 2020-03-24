import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import EditTodo from '../containers/editTodo';

class Edit extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <EditTodo navigation={this.props.navigation} route={this.props.route} />
      </View>
    );
  }
}

export default Edit;
