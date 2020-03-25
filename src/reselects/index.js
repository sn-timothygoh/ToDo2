import {createSelector} from 'reselect';

const getSearch = state => state.search;
const getTodos = state => state.todos;
const getSession = state => state.sessions;

export const getSearchTodos = createSelector(
  [getTodos, getSearch, getSession],
  (todos, search, sessions) => {
    const filterd = todos.filter(todo => todo.userId === sessions.userId);
    if (search !== '')
      return filterd.filter(todo => {
        let tempText = todo.title;

        search = search.toLowerCase();

        return tempText.toLowerCase().includes(search);
      });

    return filterd;
  },
);
