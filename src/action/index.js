import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  IMPORTANT_TODO,
  SEARCH_TODO,
  EDIT_TODO,
  LOGIN,
} from '../constants';

export const addTodo = (title, description, start, end) => ({
  type: ADD_TODO,
  id: Math.random(),
  title,
  description,
  start,
  end,
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

export const login = (trueFalse, name, password) => ({
  type: LOGIN,
  trueFalse,
  name,
  password,
});
