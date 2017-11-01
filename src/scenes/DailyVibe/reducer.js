import { combineReducers } from 'redux';
import dataReducer from './data/reducer';
import { CURRENT_IMAGE_CHANGED } from './actionTypes';
import { getImages } from './data/vibe/reducer';

const playingReducer = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const currentImageReducer = (state = 0, action) => {
  switch (action.type) {
    case CURRENT_IMAGE_CHANGED:
      return action.payload.currentImage;
    default:
      return state;
  }
};

export default combineReducers({
  playing: playingReducer,
  currentImage: currentImageReducer,
  data: dataReducer,
});

export const getCurrentImage = state => (
  state.DailyVibe.currentImage
);

// TODO test
export const getNextImage = (state) => {
  const currentImage = getCurrentImage(state);
  const images = getImages(state);
  const nextImage = currentImage + 1;

  return images[nextImage] ? nextImage : 0;
};

// TODO test
export const getPreviousImage = (state) => {
  const currentImage = getCurrentImage(state);
  const images = getImages(state);
  const previousImage = currentImage - 1;
  const lastIndex = images.length - 1;

  return previousImage >= 0 ? previousImage : lastIndex;
};
