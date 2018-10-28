import {
  LOAD_USER_PROFILE
} from '../actions/actiontypes'

const defaultState = {}

const UserReducers = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return Object.assign({}, state, action.result);

    default:
      return state
  }
}

export default UserReducers