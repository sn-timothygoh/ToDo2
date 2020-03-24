import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggoleTodo, deleteTodo, importantTodo, login} from '../action/index';
import {getSearchTodos} from '../reselects';

const mapStateToProps = state => ({
  todos: getSearchTodos(state),
  logins: state.logins,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggoleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  importantTodo: id => dispatch(importantTodo(id)),
  login: (trueFalse, name, password) =>
    dispatch(login(trueFalse, name, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
