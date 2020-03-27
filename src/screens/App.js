import React from 'react';
import {View, StatusBar} from 'react-native';
import VisibleTodos from '../containers/VisibleTodos';
import Header from '../containers/headerCount';
import Search from '../containers/searchTodo';
const App = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <Header navigation={navigation} />
      <Search />
      <VisibleTodos navigation={navigation} />
    </View>
  );
};

export default App;
