import APIClient from './APIClient';
import HttpClient from './HttpClient'

export default new APIClient({
  httpClient: new HttpClient({ baseUrl: process.env.REACT_APP_API_URL })
});