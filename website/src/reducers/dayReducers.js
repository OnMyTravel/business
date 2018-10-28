import { LOADING_DAY_DETAILS, DAY_DETAILS_LOADED, LOADING_DAY_DETAILS_FAILED } from '../actions/actiontypes'
import { LOADING, FAILED } from './const'

const dayReducers = (state = {}, action) => {
  let newValue = {}

  switch (action.type) {
    case LOADING_DAY_DETAILS:
      newValue[action.result.dayId] = { state: LOADING }
      return Object.assign({}, state, newValue);

    case DAY_DETAILS_LOADED:
      newValue[action.result.id] = action.result
      return Object.assign({}, state, newValue);

    case LOADING_DAY_DETAILS_FAILED:
      newValue[action.result.dayId] = { state: FAILED }
      return Object.assign({}, state, newValue);

    default:
      return state
  }
}

export default dayReducers