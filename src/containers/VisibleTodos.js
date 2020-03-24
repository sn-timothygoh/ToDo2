import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggoleTodo, deleteTodo, importantTodo} from '../action/index';
import {getSearchTodos} from '../reselects';

const mapStateToProps = state => ({
  todos: getSearchTodos(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggoleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  importantTodo: id => dispatch(importantTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
