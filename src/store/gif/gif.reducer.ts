import { ActionTypes } from './gif.action';

const defaultState = {
  isRequestInProgress: false,
  gifs: []
};

const gifReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return {
        ...state,
        isRequestInProgress: true
      };
    case ActionTypes.REQUEST_GIFS_SUCCESS:
      const updatedGifs = action.payload.type === 'add'
        ? state.gifs.concat(action.payload.gifs)
        : action.payload.gifs;

      return {
        ...state,
        isRequestInProgress: false,
        gifs: updatedGifs
      };
    case ActionTypes.REQUEST_ERROR:
      return {
        ...state,
        isRequestInProgress: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default gifReducer;
