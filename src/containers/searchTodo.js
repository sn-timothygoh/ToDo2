import {connect} from 'react-redux';
import SearchItem from '../components/SearchItem';
import {searchTodo} from '../action/index';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  searchTodo: search => dispatch(searchTodo(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
