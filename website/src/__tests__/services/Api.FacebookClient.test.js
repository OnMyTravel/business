import FacebookClient from '../../services/FacebookClient'
import FacebookAccess from '../../../../business/models/FacebookAccess'
import FacebookLoginError from '../../errors/FacebookLoginError'

describe('Services | API | FacebookClient', () => {

  let facebookClient;
  beforeEach(() => {
    global.window.FB = {
      login: jest.fn()
    }

    facebookClient = new FacebookClient({});
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
      expect(facebookClient.login).toBeDefined();
    })

    test('should use the FB global object to contact', () => {
      // when
      const promise = facebookClient.login()

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
        return expect(facebookClient.login()).rejects.toEqual(new FacebookLoginError('unknown'))
      })
    })

    describe('when the login is a success', () => {
      test('should use the FB global object to contact', () => {
        // when
        const promise = facebookClient.login()

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
