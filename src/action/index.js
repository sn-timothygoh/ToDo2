import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  IMPORTANT_TODO,
  SEARCH_TODO,
  EDIT_TODO,
  LOGIN,
  NEW_LOGIN,
  SET_USER_ID,
} from '../constants';

export const addTodo = (title, description, start, end, userId) => ({
  type: ADD_TODO,
  id: Math.random(),
  title,
  description,
  start,
  end,
  userId,
});

export const editTodo = (id, title, description, start, end) => ({
  type: EDIT_TODO,
  id,
  title,
  description,
  start,
  end,
});
export const toggoleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

export const importantTodo = id => ({
  type: IMPORTANT_TODO,
  id,
});

export const searchTodo = search => ({
  type: SEARCH_TODO,
  search,
});

// export const newLogin = (trueFalse, name, password) => ({
//   type: NEW_LOGIN,
//   userId: Math.random(),
//   trueFalse,
//   name,
//   password,
// });

export const login = (userId, name, password) => ({
  type: LOGIN,
  userId,
  name,
  password,
});

export const session = (userId, trueFalse) => ({
  type: SET_USER_ID,
  userId,
  trueFalse,
});
