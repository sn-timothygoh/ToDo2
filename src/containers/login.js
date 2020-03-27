import {login, session} from '../action/index';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
const mapStateToProps = state => ({
  logins: state.logins,
  sessions: state.sessions,
});

const mapDispatchToProps = dispatch => ({
  login: (userId, name, password) => dispatch(login(userId, name, password)),
  session: (userId, trueFalse) => dispatch(session(userId, trueFalse)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
