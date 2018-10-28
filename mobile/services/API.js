import APIClient from './APIClient';
import HttpClient from './HttpClient';

export default new APIClient({ httpClient: new HttpClient({ baseUrl: 'http://172.31.99.84:3001' }) });