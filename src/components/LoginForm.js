import React, {useState, useRef} from 'react';
import {
  View,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const LoginForm = ({logins, session, login}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const ref_input = useRef();

  const checkEmpty = (name, password) => {
    if (name === '') {
      return alert('Name field must not be empty');
    } else if (password === '') {
      return alert('Password field must not be empty');
    } else {
      const found = logins.find(element => element.name === name);
      if (found === undefined) {
        const userId = Math.random();
        login(userId, name, password);
        session(userId, true);
        Keyboard.dismiss();
        setName('');
        setPassword('');
      } else {
        if (found.name === name && found.password === password) {
          session(found.userId, true);
          Keyboard.dismiss();
          setName('');
          setPassword('');
        } else {
          alert('Incorrect Password');
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.select({ios: 80, android: 10})}
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      enabled
      scrollEnabled={false}>
      <StatusBar hidden={true} />
      <View style={{marginBottom: 10, marginRight: 20, marginLeft: 20}}>
        <TextInput
          mode="outlined"
          placeholder="Name"
          value={name}
          onChangeText={setName}
          returnKeyType="next"
          onSubmitEditing={() => ref_input.current.focus()}
        />
      </View>
      <View style={{marginBottom: 10, marginRight: 20, marginLeft: 20}}>
        <TextInput
          mode="outlined"
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          ref={ref_input}
        />
      </View>
      <View style={{marginBottom: 10, marginRight: 20, marginLeft: 20}}>
        <Button
          contentStyle={{height: 40}}
          color="skyblue"
          mode="contained"
          labelStyle={{fontSize: 20}}
          onPress={() => checkEmpty(name, password)}>
          Login
        </Button>
      </View>
      <View style={{marginRight: 20, marginLeft: 20}}>
        <Button
          contentStyle={{height: 40}}
          color="skyblue"
          mode="contained"
          labelStyle={{fontSize: 20}}
          onPress={() => session(111, true)}>
          Login as Guess
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
