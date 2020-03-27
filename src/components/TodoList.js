import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ListItem from './ListItem';
import _ from 'lodash';
const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  importantTodo,
  navigation,
  sessions,
  session,
}) => {
  const sortTodo = _.orderBy(
    todos,
    ['completed', 'isImportant'],
    ['asc', 'desc'],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={sortTodo}
        renderItem={({item}) => (
          <ListItem
            key={item.id}
            importantTodo={importantTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            item={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => session(sessions.userId, false)}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    width: '100%',
    position: 'relative',
    bottom: 0,
    left: 0,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
