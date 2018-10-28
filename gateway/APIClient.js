import UserApi from './services/UserApi'
import FacebookApi from './services/FacebookApi';
import DayApi from './services/DayApi';
import TripApi from './services/TripApi';

class API {
  constructor({ httpClient, facebookClient, options } = { options: {} }) {
    this.httpClient = httpClient;
    this.User = new UserApi({ httpClient: this.httpClient });
    this.Facebook = new FacebookApi({ facebookClient });
    this.Trip = new TripApi({ httpClient: this.httpClient });
    this.Day = new DayApi({ httpClient: this.httpClient });
  }

  setToken(token) {
    this.httpClient.setToken(token)
  }
}

export default API