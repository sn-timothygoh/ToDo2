import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [startShow, setStartShow] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [endShow, setEndShow] = useState(false);

  const ref_input = useRef();

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartShow(Platform.OS === 'ios');
    setStartDate(currentDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setEndShow(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  const showStartDatePicker = () => {
    setStartShow(true);
  };

  const showEndDatePicker = () => {
    setEndShow(true);
  };

  const checkEmpty = (title, description, start, end) => {
    if (title == '') return alert('title input is empty');
    addTodo(
      title,
      description,
      moment(start).format('DD-MM-YYYY'),
      moment(end).format('DD-MM-YYYY'),
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.inputText}>Title</Text>
        <TextInput
          onChangeText={setTitle}
          value={title}
          placeholder="Item Title"
          style={styles.input}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input.current.focus()}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.inputText}>Description</Text>
        <TextInput
          onChangeText={setDescription}
          value={description}
          placeholder="Item Description"
          style={styles.input}
          ref={ref_input}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.btnDate}>
          {moment(startDate).format('DD-MM-YYYY')}
        </Text>
        <View style={[{width: '50%'}]}>
          <Button
            style={{}}
            onPress={() => showStartDatePicker()}
            title="Start Date"
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.btnDate}>
          {moment(endDate).format('DD-MM-YYYY')}
        </Text>
        <View style={[{width: '50%'}]}>
          <Button
            style={{}}
            onPress={() => showEndDatePicker()}
            title="End Date"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => checkEmpty(title, description, startDate, endDate)}>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
      {startShow && (
        <DateTimePicker
          value={startDate}
          display="default"
          onChange={onChangeStart}
        />
      )}
      {endShow && (
        <DateTimePicker
          value={endDate}
          display="default"
          onChange={onChangeEnd}
        />
      )}
    </View>
  );
};
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    height: 50,
    width: '90%',
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    padding: 5,
  },
  btnDate: {
    width: '50%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  inputText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '20%',
  },
});
