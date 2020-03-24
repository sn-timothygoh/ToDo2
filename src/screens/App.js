import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
//import AddTodo from '../containers/addTodo';
import VisibleTodos from '../containers/VisibleTodos';
import Header from '../containers/headerCount';
import Search from '../containers/searchTodo';
class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Header navigation={this.props.navigation} />
        <Search />
        <VisibleTodos navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App;
