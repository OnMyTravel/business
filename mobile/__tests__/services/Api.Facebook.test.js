import FacebookApi from '../../services/FacebookApi'
import FacebookAccess from '../../models/FacebookAccess'

import Expo from 'expo';
jest.mock('expo');
jest.mock('fetch');

describe('Services | API | Facebook', () => {

  let facebookApi;
  beforeEach(() => {
    facebookApi = new FacebookApi({
      httpClient: {}
    });

    global.fetch = jest.fn()
      .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({ id: 1346536782 }) }))
  })

  describe('.login()', () => {

    beforeEach(() => {
      Expo.Facebook.logInWithReadPermissionsAsync.mockImplementation(() => Promise.resolve({
        type: 'success',
        token: '35bhxèénzçokjjF26èvçé'
      }))
    })

    test('should have a property login()', () => {
      expect(facebookApi.login).toBeDefined();
    })

    test('should use the FB global object to contact', () => {
      // when
      const promise = facebookApi.login()

      // then
      return promise.then(_ => {
        expect(Expo.Facebook.logInWithReadPermissionsAsync).toHaveBeenCalled();
      })
    })

    describe('when the login is failing', () => {
      test('should reject with an error', () => {
        // given
        Expo.Facebook.logInWithReadPermissionsAsync.mockImplementation(() => Promise.resolve({ type: 'unknown' }))

        // then
        return expect(facebookApi.login()).rejects.toEqual(new Error('unknown'))
      })
    })

    describe('when the login is a success', () => {
      test('should use the FB global object to contact', () => {
        // when
        const promise = facebookApi.login()

        // then
        return promise.then((facebookAccess) => {
          expect(facebookAccess).toBeInstanceOf(FacebookAccess);
          expect(facebookAccess.userId).toEqual(1346536782);
          expect(facebookAccess.accessToken).toEqual('35bhxèénzçokjjF26èvçé');
        })
      })
    })
  })

})
