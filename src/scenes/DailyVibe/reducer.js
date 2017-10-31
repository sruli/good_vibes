import { combineReducers } from 'redux';
import dataReducer from './data/reducer';

const playingReducer = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const currentImageReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  playing: playingReducer,
  currentImage: currentImageReducer,
  data: dataReducer,
});
