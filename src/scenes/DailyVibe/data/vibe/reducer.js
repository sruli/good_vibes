import vibes from './api';
import { VIBE_FETCHED } from './actions';

const initialState = {
  id: null,
  song: '',
  images: [require('../../../../../db/vibes/1/1.jpg')],
  backgroundColor: 'black',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIBE_FETCHED:
      return vibes[action.payload.vibeId];
    default:
      return state;
  }
};

// TODO test
export const getCurrentImage = (state) => {
  const { DailyVibe: { currentImage } } = state;
  const { DailyVibe: { data: { vibe: { images } } } } = state;
  return images[currentImage];
};

export const getBackgroundColor = state => (
  state.DailyVibe.data.vibe.backgroundColor
);
