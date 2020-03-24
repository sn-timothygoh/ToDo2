import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = ({todos, navigation}) => {
  const countTotal = todos => {
    if (todos.length > 0) {
      return todos.filter(todo => todo.completed === false).length;
    }
    return 0;
  };

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo list</Text>
      <Text style={styles.numbertext}>{countTotal(todos)} of Task </Text>
      <Icon
        style={styles.icon}
        onPress={() => navigation.navigate('Item')}
        name="plus"
        size={30}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
  },
  text: {
    marginRight: 50,
    color: '#fff',
    fontSize: 23,
  },
  numbertext: {
    color: 'red',
    justifyContent: 'center',
    fontSize: 23,
  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  input: {
    margin: 5,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
  },
});

export default Header;
