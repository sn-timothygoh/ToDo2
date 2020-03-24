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
  logins,
  toggleTodo,
  deleteTodo,
  importantTodo,
  navigation,
  login,
}) => {
  const sortTodo = _.orderBy(
    todos,
    ['completed', 'isImportant'],
    ['asc', 'desc'],
  );

  const logout = (name, password) => {
    login(false, name, password);
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1}}>
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

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => logout(logins.name, logins.password)}>
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
