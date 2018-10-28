import { LOADING_TRIP_DETAILS, TRIP_DETAILS_LOADED, LOADING_TRIP_DETAILS_FAILED } from './actiontypes';
import API from '../services/API'

export const getTripDetailsFromId = (id) => {
  return function (dispatch) {

    return Promise.resolve()
      .then(() => {
        dispatch({
          type: LOADING_TRIP_DETAILS,
          result: {
            tripId: id
          }
        })
      })
      .then(() => {
        return API.Trip.get(id)
      })
      .then((trip) => {
        dispatch({
          type: TRIP_DETAILS_LOADED,
          result: trip
        })
        
        return trip
      })
      .catch((err) => {
        dispatch({
          type: LOADING_TRIP_DETAILS_FAILED,
          result: {
            tripId: id
          }
        })
      })
  }
}