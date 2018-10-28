import FacebookApi from '../../services/FacebookApi'
import FacebookAccess from '../../models/FacebookAccess'
import FacebookLoginError from '../../errors/FacebookLoginError'

describe('Services | API | Facebook', () => {

  let facebookApi;
  beforeEach(() => {
    global.window.FB = {
      login: jest.fn()
    }

    facebookApi = new FacebookApi({
      httpClient: {}
    });
  })

  describe('.login()', () => {

    beforeEach(() => {
      global.window.FB.login
      .mockImplementation(callback => callback(
        {
          status: 'connected',
          authResponse: {
            userID: 1346536782,
            accessToken: '35bhxèénzçokjjF26èvçé'
          }
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
        expect(global.window.FB.login).toHaveBeenCalled();
      })
    })

    describe('when the login is failing', () => {
      test('should reject with an error', () => {
        // given
        global.window.FB.login.mockImplementation(callback => callback({ status: 'unknown' }))

        // then
        return expect(facebookApi.login()).rejects.toEqual(new FacebookLoginError('unknown'))
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
