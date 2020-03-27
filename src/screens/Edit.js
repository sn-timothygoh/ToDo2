import React from 'react';
import {View, StatusBar} from 'react-native';
import EditTodo from '../containers/editTodo';

const Edit = ({navigation, route}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden={true} />
      <EditTodo navigation={navigation} route={route} />
    </View>
  );
};

export default Edit;
