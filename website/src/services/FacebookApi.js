import FacebookAccess from '../models/FacebookAccess'
import FacebookLoginError from '../errors/FacebookLoginError'

class FacebookApi {
  constructor({ httpClient } = {}) {
    this.httpClient = httpClient;
  }

  login() {
    return new Promise((resolve, reject) => {
      window.FB.login((response) => {
        if(response.status === 'connected') {
          return resolve(new FacebookAccess({
            accessToken: response.authResponse.accessToken,
            userId: response.authResponse.userID
          }));
        }

        reject(new FacebookLoginError(response.status));
      })
    }) 
  }
}

export default FacebookApi