import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import LoginForm from '../containers/login';

class Login extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Login;
