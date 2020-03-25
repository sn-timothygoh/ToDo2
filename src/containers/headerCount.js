import {connect} from 'react-redux';
import Header from '../components/Header';
import {toggoleTodo, deleteTodo, importantTodo} from '../action/index';

const mapStateToProps = state => ({
  todos: state.todos,
  sessions: state.sessions,
});

export default connect(mapStateToProps, null)(Header);
