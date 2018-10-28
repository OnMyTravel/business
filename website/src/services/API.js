import APIClient from '../../../gateway/APIClient';
import HttpClient from './HttpClient'
import FacebookClient from './FacebookClient'

export default new APIClient({
  httpClient: new HttpClient({ baseUrl: process.env.REACT_APP_API_URL }),
  facebookClient: new FacebookClient()
});