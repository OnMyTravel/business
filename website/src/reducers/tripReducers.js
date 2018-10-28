import { TRIP_DETAILS_LOADED } from '../actions/actiontypes'
const tripReducers = (state = {}, action) => {
  switch (action.type) {
    case TRIP_DETAILS_LOADED:

    const newValue = {}
    newValue[action.result.id] = action.result
    return Object.assign({}, state, newValue);

    default:
      return state
  }
}

export default tripReducers