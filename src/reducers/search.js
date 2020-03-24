import {SEARCH_TODO} from '../constants';

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_TODO:
      return action.search;

    default:
      return state;
  }
};

export default searchReducer;
