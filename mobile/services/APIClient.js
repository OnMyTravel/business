import UserApi from './UserApi'
import FacebookApi from './FacebookApi';

class API {
  constructor({ httpClient, options } = { options: {} }) {
    this.httpClient = httpClient;
    this.User = new UserApi({ httpClient: this.httpClient });
    this.Facebook = new FacebookApi({ httpClient: this.httpClient });
  }

  setToken(token) {
    this.httpClient.setToken(token)
  }
}

export default API