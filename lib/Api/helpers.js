import axios from 'axios';
import * as apiTypes from './actionTypes';
import * as apiConstants from './contants';
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
axios.interceptors.response.use(response => response, error => Promise.reject(error));
export const getAction = action => {
  if (action && typeof action === 'string') {
    return {
      type: action
    };
  }

  if (action && typeof action === 'object') {
    return action;
  }

  return {
    type: apiTypes.NO_ACTION,
    error: true,
    payload: {
      error: apiConstants.ERROR_WRONG_ACTION
    }
  };
};
export const requestDispatchWithAxios = (axiosParams, actionRequest, actionResponse, actionFailed, dispatch) => {
  dispatch(getAction(actionRequest));
  return axios(axiosParams).then(response => {
    if (typeof response === 'object') {
      const {
        data
      } = response;
      dispatch({ ...getAction(actionResponse),
        payload: data
      });
    }
  }).catch(error => {
    console.log('error in helpers', error);
    dispatch({ ...getAction(actionFailed),
      payload: {
        error
      }
    });
  });
};