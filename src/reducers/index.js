import {combineReducers} from 'redux';
import todos from './todos';
import search from './search';
import logins from './logins';
import sessions from './sessions';

export default combineReducers({
  todos,
  search,
  logins,
  sessions,
});
