import {login} from '../action/index';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
  logins: state.logins,
});

const mapDispatchToProps = dispatch => ({
  login: (trueFalse, name, password) =>
    dispatch(login(trueFalse, name, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
