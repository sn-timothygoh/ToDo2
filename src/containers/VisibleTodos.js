import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggoleTodo, deleteTodo, importantTodo, session} from '../action/index';
import {getSearchTodos} from '../reselects';

const mapStateToProps = state => ({
  todos: getSearchTodos(state),
  sessions: state.sessions,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggoleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  importantTodo: id => dispatch(importantTodo(id)),
  session: (userId, trueFalse) => dispatch(session(userId, trueFalse)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
