import {LOGIN} from '../constants';

const initialState = {
  loggedIn: false,
  name: 'abc',
  password: 123,
};

const logins = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: action.trueFalse,
        name: action.name,
        password: action.password,
      };

    default:
      return state;
  }
};

export default logins;
