import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import LoginForm from '../containers/login';

class Login extends Component {
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

export default Login;
