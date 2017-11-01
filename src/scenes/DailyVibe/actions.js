import {
  CURRENT_IMAGE_CHANGED,
  PLAY_TAPPED,
  PAUSE_TAPPED,
} from './actionTypes';

export const currentImageChanged = currentImage => ({
  type: CURRENT_IMAGE_CHANGED,
  payload: { currentImage },
});

export const playTapped = () => ({
  type: PLAY_TAPPED,
});

export const pauseTapped = () => ({
  type: PAUSE_TAPPED,
});
