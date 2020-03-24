/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/screens/App';
import Item from './src/screens/Item';
import Edit from './src/screens/Edit';
import Login from './src/screens/Login';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/configureStore';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AppContainer = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator navigationOptions={(headerMode = 'none')}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
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
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
