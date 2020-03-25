import {connect} from 'react-redux';
import AddItem from '../components/AddItem';
import {addTodo} from '../action/index';

const mapStateToProps = state => ({
  todos: state.todos,
  sessions: state.sessions,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (title, description, start, end, userId) =>
    dispatch(addTodo(title, description, start, end, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
