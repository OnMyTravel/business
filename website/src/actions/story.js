import {getTripDetailsFromId, getDayDetailsFromId} from './index'

export const loadTripAndSubressources = (tripId) => {
  return (dispatch) => {
    return getTripDetailsFromId(tripId)(dispatch)
      .then((tripDetails) => {
        const promises = tripDetails.days.map(day => {
          return getDayDetailsFromId(day.id)(dispatch);
        })

        return Promise.all(promises)
      })
  }
}
