import React from 'react';
import {View, StatusBar} from 'react-native';
import AddTodo from '../containers/addTodo';

const Item = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden={true} />
      <AddTodo navigation={navigation} />
    </View>
  );
};

export default Item;
