import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const LoginForm = ({logins, sessions, session, login}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(true);
  const ref_input = useRef();
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (load) {
  //     if (session.loggedIn === true) {
  //       navigation.navigate('Home');
  //       setLoad(false);
  //     }
  //   }
  // }, []);

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
        console.log('new');
      } else {
        if (found.name === name && found.password === password) {
          session(found.userId, true);
          Keyboard.dismiss();
          setName('');
          setPassword('');
        } else {
          Alert('Incorrect Password');
        }
      }
    }
  };

  return (
    <View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Name..."
          style={styles.input}
          returnKeyType="next"
          onSubmitEditing={() => ref_input.current.focus()}
        />
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password..."
          style={styles.input}
          ref={ref_input}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => checkEmpty(name, password)}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    width: '100%',
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
