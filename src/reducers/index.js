import {combineReducers} from 'redux';
import todos from './todos';
import search from './search';
import logins from './logins';

export default combineReducers({
  todos,
  search,
  logins,
});
