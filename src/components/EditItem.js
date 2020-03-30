import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {TextInput, Button} from 'react-native-paper';

const EditTodo = ({editTodo, route, navigation}) => {
  const {itemId, title, description, start, end} = route.params;
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const [startDate, setStartDate] = useState(
    new Date(moment.unix(start).utc()),
  );
  const [startShow, setStartShow] = useState(false);

  const [endDate, setEndDate] = useState(new Date(moment.unix(end).utc()));
  const [endShow, setEndShow] = useState(false);

  const onChangeStart = (e, selectedDate) => {
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

  const onChangeEnd = (e, selectedDate) => {
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

  const checkEmpty = (id, editTitle, editdDescription, start, end) => {
    if (start > end) {
      alert('End date must be greater than Start date');
    } else {
      if (editTitle === '' && editdDescription === '') {
        editTodo(
          id,
          title,
          description,
          moment(start).format('X'),
          moment(end).format('X'),
        );
      } else if (editdDescription === '') {
        editTodo(
          id,
          editTitle,
          description,
          moment(start).format('X'),
          moment(end).format('X'),
        );
      } else if (editTitle === '') {
        editTodo(
          id,
          title,
          editdDescription,
          moment(start).format('X'),
          moment(end).format('X'),
        );
      } else {
        editTodo(
          id,
          editTitle,
          editdDescription,
          moment(start).format('X'),
          moment(end).format('X'),
        );
      }

      navigation.goBack();
    }
  };

  const ref_input = useRef();
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={{margin: 20}}>
        <TextInput
          mode="outlined"
          value={editTitle}
          placeholder={title}
          onChangeText={text => setEditTitle(text)}
          returnKeyType="next"
          onSubmitEditing={() => ref_input.current.focus()}
        />
      </View>
      <View style={{margin: 20}}>
        <TextInput
          mode="outlined"
          placeholder={description}
          value={editDescription}
          ref={ref_input}
          onChangeText={setEditDescription}
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
          icon="account-edit"
          mode="contained"
          labelStyle={{fontSize: 20}}
          onPress={() =>
            checkEmpty(itemId, editTitle, editDescription, startDate, endDate)
          }>
          Edit Item
        </Button>
      </View>

      {startShow ? (
        <DateTimePicker
          value={startDate}
          minimumDate={new Date()}
          display="default"
          onChange={onChangeStart}
        />
      ) : null}
      {endShow ? (
        <DateTimePicker
          value={endDate}
          display="default"
          minimumDate={new Date()}
          onChange={onChangeEnd}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
};
export default EditTodo;

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
