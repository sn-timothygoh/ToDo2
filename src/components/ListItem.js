import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import moment from 'moment';
import {IconButton} from 'react-native-paper';

const ListItem = ({
  item,
  toggleTodo,
  deleteTodo,
  importantTodo,
  navigation,
}) => {
  const checkItem = () => {
    toggleTodo(item.id);
  };

  const editScreen = () => {
    navigation.navigate('ItemEdit', {
      itemId: item.id,
      title: item.title,
      description: item.description,
      start: item.start,
      end: item.end,
    });
  };

  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={[
            styles.listItem,
            {
              borderColor: item.completed
                ? 'green'
                : item.isImportant
                ? 'red'
                : 'lightgray',
            },
          ]}>
          <View style={[styles.listItemView]}>
            <View style={styles.checkbox}>
              <CheckBox
                size={30}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={item.completed}
                onPress={() => checkItem()}
              />
            </View>
            <Text
              style={[
                styles.listItemText,
                {
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                },
              ]}>
              {item.title}
            </Text>

            <IconButton
              icon="alert-circle-outline"
              color="yellow"
              size={25}
              onPress={() => importantTodo(item.id)}
            />
            <IconButton
              icon="square-edit-outline"
              color="gray"
              size={25}
              onPress={() => editScreen()}
            />
            <IconButton
              icon="close"
              color="red"
              size={25}
              onPress={() => deleteTodo(item.id)}
            />
          </View>
          <View>
            <Text style={{margin: 10, fontSize: 15}}>{item.description}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  margin: 10,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                {moment.unix(item.start).format('DD-MM-YYYY')} -{' '}
                {moment.unix(item.end).format('DD-MM-YYYY')}
              </Text>
              <Text
                style={{
                  margin: 10,
                }}>
                {item.completed
                  ? 'Task Comepleted'
                  : `Due ${moment(
                      moment.unix(item.end).utc(),
                    ).fromNow()} on ${moment(
                      moment.unix(item.end).utc(),
                    ).format('dddd')}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    right: 10,
  },
  listItem: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderColor: '#eee',
    borderLeftWidth: 6,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    right: 20,
    alignItems: 'center',
    fontSize: 20,
    width: '30%',
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default ListItem;
