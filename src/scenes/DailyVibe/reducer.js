import { combineReducers } from 'redux';
import dataReducer from './data/reducer';
import { getImages } from './data/vibe/reducer';
import {
  CURRENT_IMAGE_CHANGED,
  PLAY_TAPPED,
  PAUSE_TAPPED,
  TIMER_SET,
} from './actionTypes';

const playingReducer = (state = false, action) => {
  switch (action.type) {
    case PLAY_TAPPED:
      return true;
    case PAUSE_TAPPED:
      return false;
    default:
      return state;
  }
};

const currentImageReducer = (state = 0, action) => {
  switch (action.type) {
    case CURRENT_IMAGE_CHANGED:
      return action.payload.nextImage;
    default:
      return state;
  }
};

const timerKeyReducer = (state = null, action) => {
  switch (action.type) {
    case TIMER_SET:
      return action.payload.timerKey;
    default:
      return state;
  }
};

export default combineReducers({
  playing: playingReducer,
  currentImage: currentImageReducer,
  timerKey: timerKeyReducer,
  data: dataReducer,
});

export const getCurrentImage = state => (
  state.DailyVibe.currentImage
);

export const getPlaying = state => (
  state.DailyVibe.playing
);

export const getTimerKey = state => (
  state.DailyVibe.timerKey
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
