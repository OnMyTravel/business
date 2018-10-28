import {
  START_AUTHENTICATION,
  FACEBOOK_AUTHENTICATION_FAILED,
  FACEBOOK_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_SUCCESS,
  LOAD_USER_PROFILE
} from './actiontypes';

import FacebookLoginError from '../errors/FacebookLoginError';
import API from '../services/API';

export const startConnexion = () => {
  return function (dispatch) {
    dispatch({ type: START_AUTHENTICATION })

    API.Facebook.login()
      .then((facebookAccess) => {
        dispatch({
          type: FACEBOOK_AUTHENTICATION_SUCCESS,
          result: facebookAccess
        })

        return facebookAccess;
      })
      .then((facebookAccess) => {
        return API.User.register(facebookAccess.accessToken)
      })
      .then((data) => {
        API.setToken(data.token);
        dispatch({
          type: API_AUTHENTICATION_SUCCESS,
          result: {
            token: data.token
          }
        })

        //      dispatch(push('/profile'));
      })
      .then(() => {
        return API.User.get()
      })
      .then((userDetails) => {
        dispatch({
          type: LOAD_USER_PROFILE,
          result: userDetails
        })
      })
      .catch((err) => {
        dispatch({
          type: FACEBOOK_AUTHENTICATION_FAILED,
          result: err 
        })
      })
  }
}