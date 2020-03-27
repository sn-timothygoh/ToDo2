import React, {useState, useRef} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {TextInput, Button} from 'react-native-paper';

const AddTodo = ({addTodo, navigation, sessions}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  const [startDate, setStartDate] = useState(new Date());
  const [startShow, setStartShow] = useState(false);

  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24),
  );
  const [endShow, setEndShow] = useState(false);

  const ref_input = useRef();

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartShow(Platform.OS === 'ios');
    if (
      moment(moment(currentDate).format('YYYY-MM-DD')).isSame(
        moment(new Date()).format('YYYY-MM-DD'),
      )
    ) {
      setStartDate(currentDate);
    } else if (new Date() >= currentDate) {
      alert('Error date');
    } else {
      setStartDate(currentDate);
    }
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setEndShow(Platform.OS === 'ios');
    if (
      moment(moment(currentDate).format('YYYY-MM-DD')).isSame(
        moment(new Date()).format('YYYY-MM-DD'),
      )
    ) {
      setEndDate(currentDate);
    } else if (new Date() >= currentDate) {
      alert('Error date');
    } else {
      setEndDate(currentDate);
    }
  };

  const showStartDatePicker = () => {
    setStartShow(true);
  };

  const showEndDatePicker = () => {
    setEndShow(true);
  };

  const checkEmpty = (title, description, start, end) => {
    if (title == '') return alert('title input is empty');
    if (start >= end) {
      alert('End date must be greater than Start date');
    } else {
      addTodo(
        title,
        description,
        moment(start).format('X'),
        moment(end).format('X'),
        sessions.userId,
      );

      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={{margin: 20}}>
        <TextInput
          mode="outlined"
          value={title}
          placeholder="Add Todo Item"
          onChangeText={text => setTitle(text)}
          returnKeyType="next"
          onSubmitEditing={() => ref_input.current.focus()}
        />
      </View>

      <View style={{margin: 20}}>
        <TextInput
          mode="outlined"
          placeholder="Add Description"
          value={description}
          ref={ref_input}
          onChangeText={setDescription}
        />
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <Button color="black" labelStyle={{fontSize: 20}} mode="text">
          {moment(startDate).format('DD-MM-YYYY')}
        </Button>

        <View style={[{marginLeft: 20, width: '50%'}]}>
          <Button onPress={() => showStartDatePicker()} mode="contained">
            Start Date
          </Button>
        </View>
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <Button color="black" labelStyle={{fontSize: 20}} mode="text">
          {moment(endDate).format('DD-MM-YYYY')}
        </Button>

        <View style={[{marginLeft: 20, width: '50%'}]}>
          <Button onPress={() => showEndDatePicker()} mode="contained">
            End Date
          </Button>
        </View>
      </View>
      <View style={{margin: 20}}>
        <Button
          contentStyle={{height: 50}}
          color="skyblue"
          icon="plus"
          mode="contained"
          labelStyle={{fontSize: 20}}
          onPress={() => checkEmpty(title, description, startDate, endDate)}>
          Add Item
        </Button>
      </View>

      {startShow && (
        <DateTimePicker
          value={startDate}
          minimumDate={new Date()}
          display="default"
          onChange={onChangeStart}
        />
      )}
      {endShow && (
        <DateTimePicker
          value={endDate}
          minimumDate={new Date()}
          display="default"
          onChange={onChangeEnd}
        />
      )}
    </KeyboardAvoidingView>
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
