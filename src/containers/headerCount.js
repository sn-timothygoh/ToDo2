import {connect} from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
  todos: state.todos,
  sessions: state.sessions,
});

export default connect(mapStateToProps, null)(Header);
