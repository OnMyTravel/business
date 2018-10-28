import { REHYDRATE } from 'redux-persist'
import { has } from 'lodash'

import API from '../services/API'

const persistState = (state = {}, action) => {
  switch (action.type) {
    // case REHYDRATE:
    //   if(has(action, 'payload.user.api_token')) {
    //     API.setToken(action.payload.user.api_token)
    //   }

    // return Object.assign({}, state, {});

    default:
      return state
  }
}

export default persistState