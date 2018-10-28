import User from '../models/User'

class UserApi {
  constructor({ httpClient } = {}) {
    this.httpClient = httpClient;
  }

  get() {
    return this.httpClient.get('/users/me')
      .then((response) => response.json())
      .then((user) => {
        return new User({
          email: user.email,
          name: user.name
        });
      });
  }

  register(token) {
    return this.httpClient.post('/users/register/facebook', { "access_token": token })
      .then((response) => response.json())
  }
}

export default UserApi