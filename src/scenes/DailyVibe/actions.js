import { CURRENT_IMAGE_CHANGED } from './actionTypes';

export const currentImageChanged = currentImage => ({
  type: CURRENT_IMAGE_CHANGED,
  payload: { currentImage },
});
