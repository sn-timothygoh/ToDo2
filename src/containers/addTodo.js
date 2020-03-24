import {connect} from 'react-redux';
import AddItem from '../components/AddItem';
import {addTodo} from '../action/index';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: (title, description, start, end) =>
    dispatch(addTodo(title, description, start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
