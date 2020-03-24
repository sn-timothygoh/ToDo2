import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const LoginForm = ({logins, navigation, login}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(true);
  const ref_input = useRef();

  useEffect(() => {
    if (load) {
      if (logins.loggedIn === true) {
        navigation.navigate('Home');
      }
      setLoad(false);
    }
  }, []);

  const checkEmpty = (name, password) => {
    if (name === '') {
      return alert('Name field must not be empty');
    } else if (password === '') {
      return alert('Password field must not be empty');
    } else {
      if (name === logins.name || password === logins.password) {
        login(true, name, password);
        Keyboard.dismiss();
        navigation.navigate('Home');
        setName('');
        setPassword('');
      } else {
        alert('Name or Password is incorrect');
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
    position: 'absolute',
    bottom: 0,
    left: 0,
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
