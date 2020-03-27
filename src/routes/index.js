import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import App from '../screens/App';
import Item from '../screens/Item';
import Edit from '../screens/Edit';
import Login from '../screens/Login';
import {Image} from 'react-native';

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
          <Stack.Screen
            name="Home"
            component={App}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Item"
            component={Item}
            options={{
              title: 'Add Item',
              headerStyle: {
                height: 64,
                backgroundColor: 'white', // or 'white
                borderBottomColor: 'transparent',
                elevation: 0, // for android
              },
              headerBackImage: () => (
                <Image source={require('../../assets/back.png')} />
              ),
              headerBackTitle: null,
              headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: 15,
                paddingRight: 16,
              },
              headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: 16,
              },
            }}
          />
          <Stack.Screen
            initialParams={{itemId: 42}}
            name="ItemEdit"
            component={Edit}
            options={{
              title: 'Edit Item',
              headerStyle: {
                height: 64,
                backgroundColor: 'white', // or 'white
                borderBottomColor: 'transparent',
                elevation: 0, // for android
              },
              headerBackImage: () => (
                <Image source={require('../../assets/back.png')} />
              ),
              headerBackTitle: null,
              headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: 15,
                paddingRight: 16,
              },
              headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: 16,
              },
            }}
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
