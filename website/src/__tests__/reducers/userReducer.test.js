import userReducers from '../../reducers/userReducers';
import { START_AUTHENTICATION, API_AUTHENTICATION_LOGOUT } from '../../actions/actiontypes'

describe('userReducer', () => {
  describe('START_AUTHENTICATION', () => {
    test('should change the facebook status', () => {
      // when
      const nextState = userReducers(undefined, { type: START_AUTHENTICATION });

      // then
      expect(nextState).toEqual({})
    })
  })

  describe('API_AUTHENTICATION_LOGOUT', () => {
    test('should change change the authentication status', () => {
      // given
      const currentState = {
        isLoggedIn: true,
        api_token: 'my-token-ici'
      }

      // when
      const nextState = userReducers(currentState, { type: API_AUTHENTICATION_LOGOUT })

      // then
      expect(nextState).toEqual({})
    })
  })
})