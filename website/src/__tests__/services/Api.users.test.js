import UserApi from '../../services/UserApi'
import User from '../../models/User'

describe('Services | API | Users', () => {

  let apiUser;
  let httpClientMock;
  beforeEach(() => {
    httpClientMock = {
      get: jest.fn().mockImplementation(() => Promise.resolve({
        "_id": "5afd35e767887f18ff0579d9",
        "name": "Adrien Saunier",
        "email": "contact-me@onmy.travel",
        "id_facebook": "10209454505977406"
      })),

      post: jest.fn().mockImplementation(() => Promise.resolve({}))
    }

    apiUser = new UserApi({
      httpClient: httpClientMock
    });
  })

  describe('.get()', () => {
    test('should have a property get()', () => {
      expect(apiUser.get).toBeDefined();
    })

    test('should return a User', () => {
      // when
      const promise = apiUser.get()

      // then
      return promise.then((user) => {
        expect(user).toBeInstanceOf(User);
        expect(user).toEqual({
          name: 'Adrien Saunier',
          email: 'contact-me@onmy.travel',
        })
      })
    })

    test('should contact the API', () => {
      // when
      const promise = apiUser.get()

      // then
      return promise.then((user) => {
        expect(httpClientMock.get).toHaveBeenCalledWith('/users/me');
      })
    })
  })

  describe('.register()', () => {
    test('should have a property register()', () => {
      expect(apiUser.register).toBeDefined();
    })

    test('should contact the API', () => {
      // given
      const token = 'huUYvbu&éujbdçç!é';

      // when
      const promise = apiUser.register(token)

      // then
      return promise.then(() => {
        expect(httpClientMock.post).toHaveBeenCalledWith('/users/register/facebook', {
          access_token: token
        });
      })
    })
  })
})
