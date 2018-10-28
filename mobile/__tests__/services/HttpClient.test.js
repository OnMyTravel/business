import HttpClient from '../../services/HttpClient'

jest.mock('fetch');

describe('Services | API | HttpClient', () => {

  beforeEach(() => {
    global.fetch = jest.fn()
      .mockImplementation(() => Promise.resolve())
  })

  describe('#constructor', () => {
    test('should have a property get()', () => {
      // when
      const httpClient = new HttpClient({ baseUrl: 'http://api.domain.com' })

      expect(httpClient.rootApi).toEqual('http://api.domain.com');
    })
  })

  describe('#setToken', () => {
    test('should save the token as a property', () => {
      // given
      const httpClient = new HttpClient({});

      // when
      httpClient.setToken('my-token');

      // then
      expect(httpClient.token).toEqual('my-token');
    })
  })

  describe('#post', () => {
    test('should have a property post()', () => {
      // when
      const httpClient = new HttpClient({ baseUrl: 'http://api.domain.com' })

      // then
      expect(httpClient.post).toBeDefined();
    })

    test('should send a POST request', () => {
      // given
      const httpClient = new HttpClient({ baseUrl: 'http://api.domain.com' })
      const body = { message: 'this is my request payload' }

      // when 
      const result = httpClient.post('/api/entity', body)

      // then
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('http://api.domain.com/api/entity', {
        method: 'POST',
        "headers": { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    })
  })

  describe('#get', () => {
    test('should have a property post()', () => {
      // when
      const httpClient = new HttpClient({ baseUrl: 'http://api.domain.com' })

      // then
      expect(httpClient.get).toBeDefined();
    })

    test('should send a GET request', () => {
      // given
      const httpClient = new HttpClient({ baseUrl: 'http://api.domain.com' })
      const body = { message: 'this is my request payload' }

      // when 
      const result = httpClient.get('/api/entity/:id')

      // then
      expect(result).toBeInstanceOf(Promise);
      expect(fetch).toHaveBeenCalledWith('http://api.domain.com/api/entity/:id', {
        method: 'GET',
      })
    })

    describe('when the token is defined', () => {
      test('should send a GET request with an Authorization header', () => {
        // given
        const httpClient = new HttpClient({ baseUrl: 'http://api.domain.com' })
        const body = { message: 'this is my request payload' }

        // when 
        httpClient.setToken('my-token-to-get-details');
        const result = httpClient.get('/api/entity/:id');

        // then
        expect(result).toBeInstanceOf(Promise);
        expect(fetch).toHaveBeenCalledWith('http://api.domain.com/api/entity/:id', {
          method: 'GET',
          headers: {
            'Authorization': 'bearer my-token-to-get-details'
          }
        })
      })
    })

  })
})
