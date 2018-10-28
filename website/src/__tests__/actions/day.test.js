import { getDayDetailsFromId } from '../../actions/index';
import { LOADING_DAY_DETAILS, DAY_DETAILS_LOADED, LOADING_DAY_DETAILS_FAILED } from '../../actions/actiontypes';

import API from '../../services/API'

describe('Actions | Days', () => {

  describe('.getDayDetailsFromId()', () => {

    beforeEach(() => {
      API.Day.get = jest.fn().mockImplementation(() => Promise.resolve({}))
    })

    it('should exists and be exposed', () => {
      expect(getDayDetailsFromId).toBeDefined()
    })

    it('should dispatch a LOADING_DAY_DETAILS event', () => {
      // given
      const dispatch = jest.fn()
      const dayId = 114536;

      // when
      const promise = getDayDetailsFromId(dayId)(dispatch)

      // then
      return promise.then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: LOADING_DAY_DETAILS,
          result: {
            dayId: 114536
          }
        })
      })
    })

    it('should use the API to load details and dispatch the results', () => {
      // given
      const dispatch = jest.fn()
      const dayId = 265;
      const day = { id: dayId }
      API.Day.get = jest.fn().mockImplementation(() => Promise.resolve(day))

      // when
      const promise = getDayDetailsFromId(dayId)(dispatch)

      // then
      return promise.then(() => {
        expect(API.Day.get).toHaveBeenCalledWith(265)
        expect(dispatch).toHaveBeenCalledWith({
          type: DAY_DETAILS_LOADED,
          result: day
        })
      })
    })

    it('should use the API to load details and dispatch the failure when it occurs', () => {
      // given
      const dispatch = jest.fn()
      const dayId = 14536;
      const day = { id: dayId }
      API.Day.get = jest.fn().mockImplementation(() => Promise.reject())

      // when
      const promise = getDayDetailsFromId(dayId)(dispatch)

      // then
      return promise.then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch).toHaveBeenLastCalledWith(
          {
            type: LOADING_DAY_DETAILS_FAILED,
            result: {
              dayId
            }
          }
        )
      })
    })
  })
})
