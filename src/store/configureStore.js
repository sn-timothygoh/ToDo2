import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos', 'search'],
};

const middleware = [];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {store, persistor};
