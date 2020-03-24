import {editTodo} from '../action/index';
import {connect} from 'react-redux';
import EditItem from '../components/EditItem';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  editTodo: (id, title, description, start, end) =>
    dispatch(editTodo(id, title, description, start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
