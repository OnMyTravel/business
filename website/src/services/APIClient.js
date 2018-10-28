import UserApi from './UserApi'
import FacebookApi from './FacebookApi';
import DayApi from './DayApi';
import TripApi from './TripApi';

class API {
  constructor({ httpClient, options } = { options: {} }) {
    this.httpClient = httpClient;
    this.User = new UserApi({ httpClient: this.httpClient });
    this.Facebook = new FacebookApi({ httpClient: this.httpClient });
    this.Trip = new TripApi({ httpClient: this.httpClient });
    this.Day = new DayApi({ httpClient: this.httpClient });
  }

  setToken(token) {
    this.httpClient.setToken(token)
  }
}

export default API