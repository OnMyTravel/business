import {loadTripAndSubressources}  from '../../actions/story';
import { LOADING_TRIP_DETAILS, TRIP_DETAILS_LOADED, LOADING_TRIP_DETAILS_FAILED } from '../../actions/actiontypes';

import * as actions from '../../actions/index';

import Trip from '../../models/Trip';

let mockedAction;
jest.mock('../../actions/index', () => ({
  getTripDetailsFromId : jest.fn().mockImplementation(() => mockedAction)
}))

describe('Actions | Story', () => {

  describe('.loadTripAndSubressources()', () => {

    beforeEach(() => {
      mockedAction = jest.fn().mockImplementation(() => Promise.resolve(new Trip()))
    })

    it('should exists and be exposed', () => {
      expect(loadTripAndSubressources).toBeDefined()
    })

    it('should', () => {
      // given
      const dispatch = jest.fn()
      const tripId = 14536;

      // when
      const promise = loadTripAndSubressources(tripId)(dispatch)

      // then
      return promise.then(() => {
        expect(actions.getTripDetailsFromId).toHaveBeenCalledWith(14536)
        expect(mockedAction).toHaveBeenCalledWith(dispatch)
      })
    })

    // it('should use the API to load details and dispatch the results', () => {
    //   // given
    //   const dispatch = jest.fn()
    //   const tripId = 14536;
    //   const trip = { id: tripId }
    //   API.Trip.get = jest.fn().mockImplementation(() => Promise.resolve(trip))

    //   // when
    //   const promise = getTripDetailsFromId(tripId)(dispatch)

    //   // then
    //   return promise.then(() => {
    //     expect(API.Trip.get).toHaveBeenCalledWith(14536)
    //     expect(dispatch).toHaveBeenCalledWith({
    //       type: TRIP_DETAILS_LOADED,
    //       result: trip
    //     })
    //   })
    // })

    // it('should use the API to load details and dispatch the results', () => {
    //   // given
    //   const dispatch = jest.fn()
    //   const tripId = 14536;
    //   const trip = { id: tripId }
    //   API.Trip.get = jest.fn().mockImplementation(() => Promise.resolve(trip))

    //   // when
    //   const promise = getTripDetailsFromId(tripId)(dispatch)

    //   // then
    //   return promise.then(() => {
    //     expect(API.Trip.get).toHaveBeenCalledWith(14536)
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(dispatch).toHaveBeenLastCalledWith(
    //       {
    //         type: TRIP_DETAILS_LOADED,
    //         result: trip
    //       }
    //     )
    //   })
    // })

    // it('should use the API to load details and dispatch the results', () => {
    //   // given
    //   const dispatch = jest.fn()
    //   const tripId = 14536;
    //   const trip = { id: tripId }
    //   API.Trip.get = jest.fn().mockImplementation(() => Promise.reject())

    //   // when
    //   const promise = getTripDetailsFromId(tripId)(dispatch)

    //   // then
    //   return promise.then(() => {
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(dispatch).toHaveBeenLastCalledWith(
    //       {
    //         type: LOADING_TRIP_DETAILS_FAILED,
    //         result: {
    //           tripId
    //         }
    //       }
    //     )
    //   })
    // })
  })
})
