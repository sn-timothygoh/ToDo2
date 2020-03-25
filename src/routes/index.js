import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import App from '../screens/App';
import Item from '../screens/Item';
import Edit from '../screens/Edit';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Navigation = props => {
  return (
    <Stack.Navigator navigationOptions={(headerMode = 'none')}>
      {!props.sessions.loggedIn ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          {console.log(123)}
          <Stack.Screen
            name="Home"
            component={App}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Item"
            component={Item}
            options={{title: 'Add Item'}}
          />
          <Stack.Screen
            initialParams={{itemId: 42}}
            name="ItemEdit"
            component={Edit}
            options={{title: 'Edit Item'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    sessions: state.sessions,
  };
};

export default connect(mapStateToProps, null)(Navigation);
