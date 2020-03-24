import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({
  item,
  toggleTodo,
  deleteTodo,
  importantTodo,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => toggleTodo(item.id)}
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
        <Text
          style={[
            styles.listItemText,
            {
              textDecorationLine: item.completed ? 'line-through' : 'none',
            },
          ]}>
          {item.title}
        </Text>
        <Icon
          size={40}
          color="gold"
          name="exclamation"
          onPress={() => importantTodo(item.id)}
        />
        <Icon
          size={40}
          color="gray"
          name="edit"
          onPress={() =>
            navigation.navigate('ItemEdit', {
              itemId: item.id,
              title: item.title,
              description: item.description,
              start: item.start,
              end: item.end,
            })
          }
        />
        <Icon
          onPress={() => deleteTodo(item.id)}
          name="remove"
          size={40}
          color="firebrick"
        />
      </View>
      <View>
        <Text style={{margin: 10, fontSize: 17}}>{item.description}</Text>
        <View style={styles.date}>
          <Text style={{fontSize: 15, width: '50%', textAlign: 'center'}}>
            Start : {item.start}
          </Text>
          <Text style={{fontSize: 15, width: '50%', textAlign: 'center'}}>
            End : {item.end}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'lightgray',
    borderColor: '#eee',
    borderLeftWidth: 10,
    borderRightWidth: 10,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    alignItems: 'center',
    fontSize: 30,
    width: 200,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
  date: {
    flexDirection: 'row',
  },
});

export default ListItem;
