import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import ConnexionReducers from './connexionReducers';
import TripReducers from './tripReducers';
import DayReducers from './dayReducers';
import persistState from './persist-state';

const appReducers = combineReducers({
  user: UserReducers,
  connexion: ConnexionReducers,
  trips:  TripReducers,
  days: DayReducers,
  persistState: persistState
})

export default appReducers