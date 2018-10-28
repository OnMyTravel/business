import {
  LOAD_USER_PROFILE,
  API_AUTHENTICATION_LOGOUT
} from '../actions/actiontypes'

const defaultState = {}

const UserReducers = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return Object.assign({}, state, {
        user: action.result
      });

    case API_AUTHENTICATION_LOGOUT:
      return Object.assign({}, defaultState);

    default:
      return state
  }
}

export default UserReducers