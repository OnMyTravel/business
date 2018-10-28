import persistState from '../../reducers/persist-state';
import { REHYDRATE } from 'redux-persist'
import API from '../../services/API';

jest.mock('../../services/API');

describe('persistState', () => {

  beforeEach(() => {
    API.setToken.mockReset()
  })

  describe('REHYDRATE', () => {
    test('should not change the state', () => {
      // when
      const nextState = persistState(undefined, { type: REHYDRATE });

      // then
      expect(nextState).toEqual({})
      expect(API.setToken).not.toHaveBeenCalled()
    })

    // test('should set the API token from previous state', () => {
    //   // when
    //   const nextState = persistState(undefined, {
    //     type: REHYDRATE, payload: {
    //       user: {
    //         api_token: 'my-token'
    //       }
    //     }
    //   });

    //   // then
    //   expect(nextState).toEqual({})
    //   expect(API.setToken).toHaveBeenCalledWith('my-token')
    // })

  //   test('should not set the API token', () => {
  //     // when
  //     const nextState = persistState(undefined, {
  //       type: REHYDRATE, payload: null
  //     });

  //     // then
  //     expect(nextState).toEqual({})
  //     expect(API.setToken).not.toHaveBeenCalled()
  //   })
  })
})