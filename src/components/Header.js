import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {IconButton, Colors} from 'react-native-paper';

const Header = ({todos, navigation, sessions}) => {
  const countTotal = todos => {
    if (todos.length > 0) {
      return todos.filter(
        todo => todo.completed === false && todo.userId === sessions.userId,
      ).length;
    }
    return 0;
  };

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo list</Text>
      <Text style={styles.numbertext}>{countTotal(todos)} of Task </Text>
      <IconButton
        style={styles.icon}
        icon="plus"
        color="white"
        size={30}
        onPress={() => navigation.navigate('Item')}
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
    top: 0,
    right: 0,
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
