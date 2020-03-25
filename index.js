/**
 * @format
 */
import {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import React from 'react';
import Navigation from './src/routes/index';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/splashScreen';

const AppContainer = () => {
  const [screen, setScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setScreen(true);
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {bootstrapped => {
          if (bootstrapped && screen) {
            return (
              <NavigationContainer>
                <Navigation />
              </NavigationContainer>
            );
          } else {
            return <SplashScreen />;
          }
        }}
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
