import * as types from './actionTypes';

export const beginFetchRequest = () => (
  { type: types.BEGIN_FETCH_REQUEST }
);

export const fetchRequestError = (err) => (
  { type: types.FETCH_REQUEST_ERROR, err }
);

export const fetchRequestSuccess = () => (
  { type: types.FETCH_REQUEST_SUCCESS }
);
