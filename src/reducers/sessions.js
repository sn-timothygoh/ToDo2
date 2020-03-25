import {SET_USER_ID} from '../constants';

const sessions = (state = [], action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        userId: action.userId,
        loggedIn: action.trueFalse,
      };
    default:
      return state;
  }
};

export default sessions;
