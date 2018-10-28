import {loadTripAndSubressources}  from '../../actions/story';

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
  })
})
