import request from 'request-promise-native'

class HttpClient {
  constructor({ baseUrl } = {}) {
    this.rootApi = baseUrl;
  }

  setToken(token) {
    this.token = token;
  }

  post(path, body) {
    return request({
      method: 'POST',
      uri: `${this.rootApi}${path}`,
      body,
      json: true
    })
  }

  get(path) {
    const options = {
      method: 'GET',
      uri: `${this.rootApi}${path}`,
      json: true,
    }

    if(this.token) {
      options.headers = {
        'Authorization': `bearer ${this.token}`
      };
    }

    return request(options)
  }
}

export default HttpClient