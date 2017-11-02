import vibes from './api';
import { VIBE_FETCHED } from './actionTypes';
import { getCurrentImage } from '../../reducer';

const initialState = {
  id: null,
  song: {},
  images: [],
  buttonColor: 'black',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIBE_FETCHED: {
      return vibes[action.payload.vibeId];
    }
    default:
      return state;
  }
};

export const getImages = state => (
  state.DailyVibe.data.vibe.images
);

export const getSongFile = state => (
  state.DailyVibe.data.vibe.song.file
);

// TODO test
export const getBackgroundImage = (state) => {
  const currentImage = getCurrentImage(state);
  const images = getImages(state);
  return images[currentImage];
};

export const getButtonColor = state => (
  state.DailyVibe.data.vibe.buttonColor
);

export const getSongDescription = (state) => {
  const { name, artist } = state.DailyVibe.data.vibe.song;
  return `${artist} - ${name}`;
};
