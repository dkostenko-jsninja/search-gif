import { GifLoadType, GifRequestOptions, GifSearchOptions } from '../../types/common-types';

import sendRequest from '../../services/request';

export enum ActionTypes {
  REQUEST = 'REQUEST',
  REQUEST_ERROR = 'REQUEST_ERROR',
  REQUEST_GIFS_SUCCESS = 'REQUEST_GIFS_SUCCESS'
}

const request = () => {
  return {
    type: ActionTypes.REQUEST
  };
};

const requestError = (error) => {
  return {
    type: ActionTypes.REQUEST_ERROR,
    payload: {
      error
    }
  }
}

const requestGifsSuccess = (data, type) => {
  return {
    type: ActionTypes.REQUEST_GIFS_SUCCESS,
    payload: {
      gifs: data,
      type
    }
  }
}

export const requestGifs = (options: GifRequestOptions, type: GifLoadType) => async (dispatch) => {
  dispatch(request());

  sendRequest('/trending', options)
    .then((res) => {
      dispatch(requestGifsSuccess(res.data, type));
    })
    .catch((err) => {
      dispatch(requestError(err));
    });
}

export const searchGifs = (options: GifSearchOptions, type: GifLoadType) => async (dispatch) => {
  dispatch(request());

  sendRequest('/search', options)
    .then((res) => {
      dispatch(requestGifsSuccess(res.data, type));
    })
    .catch((err) => {
      dispatch(requestError(err));
    });
}
