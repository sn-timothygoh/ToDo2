import {LOGIN} from '../constants';

const logins = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return [
        ...state,
        {
          userId: action.userId,
          name: action.name,
          password: action.password,
        },
      ];
    default:
      return state;
  }
};

export default logins;
