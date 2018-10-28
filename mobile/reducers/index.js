import { combineReducers } from 'redux';

import userReducers from './userReducers';
import ConnexionReducers from './connexionReducers';

export default combineReducers({
  connexion: ConnexionReducers,
  user: userReducers
});