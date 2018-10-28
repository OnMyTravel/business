import { getTripDetailsFromId, loadTripAndSubressources } from '../../actions/index';
import { LOADING_TRIP_DETAILS, TRIP_DETAILS_LOADED, LOADING_TRIP_DETAILS_FAILED } from '../../actions/actiontypes';

import API from '../../services/API'

describe('Actions | Trip', () => {

  describe('.getTripDetailsFromId()', () => {

    beforeEach(() => {
      API.Trip.get = jest.fn().mockImplementation(() => Promise.resolve({}))
    })

    it('should exists and be exposed', () => {
      expect(getTripDetailsFromId).toBeDefined()
    })

    it('should dispatch a LOADING_TRIP_DETAILS event', () => {
      // given
      const dispatch = jest.fn()
      const tripId = 14536;

      // when
      const promise = getTripDetailsFromId(tripId)(dispatch)

      // then
      return promise.then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: LOADING_TRIP_DETAILS,
          result: {
            tripId: 14536
          }
        })
      })
    })

    it('should use the API to load details and dispatch the results', () => {
      // given
      const dispatch = jest.fn()
      const tripId = 14536;
      const trip = { id: tripId }
      API.Trip.get = jest.fn().mockImplementation(() => Promise.resolve(trip))

      // when
      const promise = getTripDetailsFromId(tripId)(dispatch)

      // then
      return promise.then(() => {
        expect(API.Trip.get).toHaveBeenCalledWith(14536)
        expect(dispatch).toHaveBeenCalledWith({
          type: TRIP_DETAILS_LOADED,
          result: trip
        })
      })
    })

    it('should use the API to load details and dispatch the results', () => {
      // given
      const dispatch = jest.fn()
      const tripId = 14536;
      const trip = { id: tripId }
      API.Trip.get = jest.fn().mockImplementation(() => Promise.resolve(trip))

      // when
      const promise = getTripDetailsFromId(tripId)(dispatch)

      // then
      return promise.then(() => {
        expect(API.Trip.get).toHaveBeenCalledWith(14536)
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch).toHaveBeenLastCalledWith(
          {
            type: TRIP_DETAILS_LOADED,
            result: trip
          }
        )
      })
    })

    it.only('should return the trip', () => {
      // given
      const dispatch = jest.fn()
      const tripId = 14536;
      const trip = { id: tripId }
      API.Trip.get = jest.fn().mockImplementation(() => Promise.resolve(trip))

      // when
      const promise = getTripDetailsFromId(tripId)(dispatch)

      // then
      return promise.then((foundTrip) => {
        expect(foundTrip).toEqual(trip)
      })
    })

    it('should use the API to load details and dispatch a failure event', () => {
      // given
      const dispatch = jest.fn()
      const tripId = 14536;
      const trip = { id: tripId }
      API.Trip.get = jest.fn().mockImplementation(() => Promise.reject())

      // when
      const promise = getTripDetailsFromId(tripId)(dispatch)

      // then
      return promise.then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch).toHaveBeenLastCalledWith(
          {
            type: LOADING_TRIP_DETAILS_FAILED,
            result: {
              tripId
            }
          }
        )
      })
    })
  })
})
