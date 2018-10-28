import APIClient from '../../../../gateway/APIClient'
import UserApi from '../../../../gateway/services/UserApi'
import FacebookApi from '../../../../gateway/services/FacebookApi';
import TripApi from '../../../../gateway/services/TripApi';
import DayApi from '../../../../gateway/services/DayApi';

describe('Services | APIClient', () => {
  let apiClient;
  let httpClientMock;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn().mockImplementation(() => Promise.resolve({}))
    }

    apiClient = new APIClient({
      httpClient: httpClientMock
    });
  })

  describe('#User', () => {
    test('should have a property User()', () => {
      expect(apiClient.User).toBeDefined();
      expect(apiClient.User).toBeInstanceOf(UserApi)
    })
  })

  describe('#Facebook', () => {
    test('should have a property Facebook()', () => {
      expect(apiClient.Facebook).toBeDefined();
      expect(apiClient.Facebook).toBeInstanceOf(FacebookApi)
    })
  })
  
  describe('#Trip', () => {
    test('should have a property Trip()', () => {
      expect(apiClient.Trip).toBeDefined();
      expect(apiClient.Trip).toBeInstanceOf(TripApi)
    })
  })
  
  describe('#Day', () => {
    test('should have a property Day()', () => {
      expect(apiClient.Day).toBeDefined();
      expect(apiClient.Day).toBeInstanceOf(DayApi)
    })
  })

  describe('.setToken', () => {
    test('should have a property setToken', () => {
      expect(apiClient.setToken).toBeDefined();
    })
  })
})
