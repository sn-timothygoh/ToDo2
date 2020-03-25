import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  IMPORTANT_TODO,
  EDIT_TODO,
} from '../constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          start: action.start,
          end: action.end,
          completed: false,
          isImportant: false,
          userId: action.userId,
        },
      ];

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              title: action.title,
              description: action.description,
              start: action.start,
              end: action.end,
            }
          : todo,
      );
    case IMPORTANT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {...todo, isImportant: !todo.isImportant}
          : todo,
      );

    default:
      return state;
  }
};

export default todos;
