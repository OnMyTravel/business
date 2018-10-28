class HttpClient {
  constructor({ baseUrl } = {}) {
    this.rootApi = baseUrl;
  }

  setToken(token) {
    this.token = token;
  }

  post(path, body) {
    return fetch(`${this.rootApi}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(body),
    });
  }

  get(path) {
    const options = {
      method: 'GET',
    }

    if(this.token) {
      options.headers = {
        'Authorization': `bearer ${this.token}`
      };
    }

    return fetch(`${this.rootApi}${path}`, options)
  }
}

export default HttpClient