import dayReducers from '../../reducers/dayReducers';

import { LOADING_DAY_DETAILS, DAY_DETAILS_LOADED, LOADING_DAY_DETAILS_FAILED } from '../../actions/actiontypes'
import { LOADING, FAILED } from '../../reducers/const'

import API from '../../services/API';

jest.mock('../../services/API');

describe('Unit | Reducer | dayReducers', () => {

  beforeEach(() => {
    API.setToken.mockReset()
  })

  describe('LOADING_DAY_DETAILS', () => {
    test('should persist the loading state of the day', () => {
      // given
      const day = { dayId: '1a32e6ba7c278945edd03' }

      // when
      const nextState = dayReducers(undefined, {
        type: LOADING_DAY_DETAILS,
        result: day
      });

      // then
      expect(nextState).toEqual({
        '1a32e6ba7c278945edd03': {
          state: LOADING
        }
      })
    })

    test('should not overwrite the previous state', () => {
      // given
      const previousState = {
        '1a32e6ba7c278945edd03': {
          state: LOADING
        }
      }
      const day = { dayId: '78945edd031a32e6ba7c2' }

      // when
      const nextState = dayReducers(previousState, {
        type: LOADING_DAY_DETAILS,
        result: day
      });

      // then
      expect(nextState).toEqual({
        '1a32e6ba7c278945edd03': {
          state: LOADING
        },
        '78945edd031a32e6ba7c2': {
          state: LOADING
        }
      })
    })

  })

  describe('DAY_DETAILS_LOADED', () => {
    test('should persist the day in the state', () => {
      // given
      const day = { id: '1a32e6ba7c278945edd03' }

      // when
      const nextState = dayReducers(undefined, {
        type: DAY_DETAILS_LOADED,
        result: day
      });

      // then
      expect(nextState).toEqual({
        '1a32e6ba7c278945edd03': day
      })
    })
  })

  describe('LOADING_DAY_DETAILS_FAILED', () => {
    test('should persist the day in the state', () => {
      // given
      const day = { dayId: '1a32e6ba7c278945edd03' }

      // when
      const nextState = dayReducers(undefined, {
        type: LOADING_DAY_DETAILS_FAILED,
        result: day
      });

      // then
      expect(nextState).toEqual({
        '1a32e6ba7c278945edd03': {
          state: FAILED
        }  
      })
    })
  })
})