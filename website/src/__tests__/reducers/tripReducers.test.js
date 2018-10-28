import tripReducers from '../../reducers/tripReducers';
import { TRIP_DETAILS_LOADED } from '../../actions/actiontypes'
import API from '../../services/API';

jest.mock('../../services/API');

describe('Unit | Reducer | tripReducers', () => {

  beforeEach(() => {
    API.setToken.mockReset()
  })

  describe('TRIP_DETAILS_LOADED', () => {
    test('should not change the state', () => {
      // given
      const trip = { id: '1a32e6ba7c278945edd03', name: 'Hello' }

      // when
      const nextState = tripReducers(undefined, {
        type: TRIP_DETAILS_LOADED,
        result: trip
      });

      // then
      expect(nextState).toEqual({
        '1a32e6ba7c278945edd03': trip
      })
    })
  })
})