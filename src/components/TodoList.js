import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import ListItem from './ListItem';
import _ from 'lodash';
const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  importantTodo,
  navigation,
}) => {
  const sortTodo = _.orderBy(
    todos,
    ['completed', 'isImportant'],
    ['asc', 'desc'],
  );
  return (
    <FlatList
      data={sortTodo}
      renderItem={({item}) => (
        <ListItem
          importantTodo={importantTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          item={item}
          navigation={navigation}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default TodoList;
