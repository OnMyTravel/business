import { LOAD_USER_PROFILE } from '../actions/actiontypes'

import API from '../services/API'

export const loadUserProfile = () => {
  return function (dispatch) {
    API.User.get().then((user) => {
      dispatch({
        type: LOAD_USER_PROFILE,
        result: user
      })
    })
  }
}