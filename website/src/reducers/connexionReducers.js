import {
  START_AUTHENTICATION,
  FACEBOOK_AUTHENTICATION_FAILED,
  FACEBOOK_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_LOGOUT,
} from '../actions/actiontypes'

const defaultState = {
  facebookAccess: null,
  accessToken: null
}

const ConnexionReducer = (state = {}, action) => {
  switch (action.type) {
    case FACEBOOK_AUTHENTICATION_FAILED:
      return Object.assign({}, state, {
        connexionError: action.result
      });

    case FACEBOOK_AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        facebookAccess: action.result
      });

    case API_AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        accessToken: action.result.token
      });

    case START_AUTHENTICATION:
    case API_AUTHENTICATION_LOGOUT:
      return Object.assign({}, defaultState);

    default:
      return state
  }
}

export default ConnexionReducer