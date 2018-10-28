import { connect } from 'react-redux'
import Login from '../components/Login'

import { logWithFacebook } from '../actions'

const mapStateToProps = (state) => {
  const hasLoggingFailed = (state.connexion.hasOwnProperty('connexionError') && state.connexion.connexionError != null)
  
  return {
    hasLoggingFailed: hasLoggingFailed,
  }
}

const mapDispatchToProps = {
  logWithFacebook: logWithFacebook
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginPage