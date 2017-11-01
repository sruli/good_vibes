import { CURRENT_IMAGE_CHANGED, PLAYING_TOGGLED } from './actionTypes';

export const currentImageChanged = currentImage => ({
  type: CURRENT_IMAGE_CHANGED,
  payload: { currentImage },
});

export const togglePlaying = () => ({
  type: PLAYING_TOGGLED,
});
