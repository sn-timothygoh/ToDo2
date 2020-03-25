import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Collapsible from 'react-native-collapsible';
import {CheckBox} from 'react-native-elements';

const ListItem = ({
  item,
  toggleTodo,
  deleteTodo,
  importantTodo,
  navigation,
}) => {
  const [collapsed, setcollapsed] = useState(true);

  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => setcollapsed(!collapsed)}
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
                onPress={() => toggleTodo(item.id)}
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
            <View
              style={{
                right: 20,
                height: '100%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                size={50}
                color="yellow"
                name="exclamation"
                onPress={() => importantTodo(item.id)}
              />
            </View>
            <View
              style={{
                right: 15,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                size={50}
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
            </View>
            <View
              style={{
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                onPress={() => deleteTodo(item.id)}
                name="remove"
                size={50}
                color="firebrick"
              />
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed} align="center">
          <View
            style={{
              flex: 1,
              backgroundColor: '#DCD9CD',
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text style={{margin: 10, fontSize: 20}}>{item.description}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    margin: 10,
                    width: '50%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  }}>
                  Start :{item.start}
                </Text>
                <Text
                  style={{
                    margin: 10,
                    width: '50%',
                  }}>
                  End :{item.end}
                </Text>
              </View>
            </View>
          </View>
        </Collapsible>
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
    padding: 3,
    backgroundColor: 'lightgray',
    borderColor: '#eee',
    borderLeftWidth: 6,
    marginTop: 2,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    right: 30,
    alignItems: 'center',
    fontSize: 20,
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
