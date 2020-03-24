import {createSelector} from 'reselect';

const getSearch = state => state.search;
const getTodos = state => state.todos;

export const getSearchTodos = createSelector(
  [getTodos, getSearch],
  (todos, search) => {
    if (search !== '')
      return todos.filter(todo => {
        let tempText = todo.title;

        search = search.toLowerCase();

        return tempText.toLowerCase().includes(search);
      });

    return todos;
  },
);
