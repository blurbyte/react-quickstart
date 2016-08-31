import * as types from './actionTypes';
import {fetchRequestError} from './fetchRequestsActions';

//polyfill for fetch requests from server (for example RESTful api), modern equivalent of XMLHttpRequest
//not required for static content
import 'whatwg-fetch';


//dummy actions to show how to handle fetch requests
export const loadDataSuccess = (data) => (
  { type: types.LOAD_DATA_SUCCESS, data }
);

//redux thunk pattern
export const loadData = () => {
  return (dispatch) => {
    //fetching data from server
    return fetch('http://yourapiurl.net/api/data')
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          return response.json();
        }
        else {
          const err = new Error(response.statusText);
          err.response = response;
          dispatch(fetchRequestError(err));
          throw err;
        }
      })
      .then(data => {
        dispatch(loadDataSuccess(data));
      })
      .catch(err => {
        dispatch(fetchRequestError(err));
        //or define custom loadDataError function
        //during development log error to console
      });
  };
};
