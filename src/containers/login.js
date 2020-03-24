import {editTodo} from '../action/index';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  editTodo: (id, title, description, start, end) =>
    dispatch(editTodo(id, title, description, start, end)),
});

export default connect(mapStateToProps, null)(LoginForm);
