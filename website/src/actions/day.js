import { LOADING_DAY_DETAILS, DAY_DETAILS_LOADED, LOADING_DAY_DETAILS_FAILED } from './actiontypes'
import API from '../services/API'

export const getDayDetailsFromId = (id) => {
  return function (dispatch) {
    return Promise.resolve()
      .then(() => {
        dispatch({
          type: LOADING_DAY_DETAILS,
          result: {
            dayId: id
          }
        })
      })
      .then(() => {
        return API.Day.get(id)
      })
      .then((day) => {
        dispatch({
          type: DAY_DETAILS_LOADED,
          result: day
        })
      })
      .catch((err) => {
        dispatch({
          type: LOADING_DAY_DETAILS_FAILED,
          result: {
            dayId: id
          }
        })
      })
  }
}