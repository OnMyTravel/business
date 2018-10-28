import {
  START_AUTHENTICATION,
  FACEBOOK_AUTHENTICATION_FAILED,
  FACEBOOK_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_SUCCESS,
  API_AUTHENTICATION_LOGOUT
} from './actiontypes'

import { push } from 'react-router-redux'

import API from '../services/API'

export const logWithFacebook = () => {
  return function (dispatch) {
    dispatch({
      type: START_AUTHENTICATION
    })

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

        dispatch(push('/profile'));
      })
      .catch((err) => {
        dispatch({
          type: FACEBOOK_AUTHENTICATION_FAILED,
          result: err
        })
      });
  }
}

export const logOut = () => {
  return function (dispatch) {
    dispatch({
      type: API_AUTHENTICATION_LOGOUT
    })
  }
}