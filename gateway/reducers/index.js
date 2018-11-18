import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import ConnexionReducers from './connexionReducers';
import TripReducers from '../../website/src/reducers/tripReducers';
import DayReducers from '../../website/src/reducers/dayReducers';
import persistState from '../../website/src/reducers/persist-state';

const appReducers = combineReducers({
  user: UserReducers,
  connexion: ConnexionReducers,
  trips:  TripReducers,
  days: DayReducers,
  persistState: persistState
})

export default appReducers