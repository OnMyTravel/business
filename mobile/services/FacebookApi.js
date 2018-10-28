import FacebookLoginError from '../errors/FacebookLoginError'
import FacebookAccess from '../models/FacebookAccess';
import Expo from 'expo';

class FacebookApi {
  constructor({ httpClient } = {}) {
    this.httpClient = httpClient;
  }

  login() {
    const response = Expo.Facebook.logInWithReadPermissionsAsync('1801749093371838', {
      permissions: ['public_profile', 'email']
    });

    return response.then((response) => {
      const { type, token } = response;

      if (response.type === 'success') {

        return fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`)
          .then((response) => response.json())
          .then((details) => {
            return new FacebookAccess({
              accessToken: response.token,
              userId: details.id
            });
          })          
      }

      return Promise.reject(new FacebookLoginError(response.type));
    })
  }
}

export default FacebookApi