import { connect } from 'react-redux'
import Login from '../components/Login'

import { startConnexion } from '../actions';

const mapStateToProps = (state) => {
  
  const hasLoggingFailed = (state.connexion.hasOwnProperty('connexionError') && state.connexion.connexionError != null)
  
  return {
    isLogging: state.user.isLogging,
    hasLoggingFailed: hasLoggingFailed,
  }
}

const mapDispatchToProps = {
  startConnexion
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginPage