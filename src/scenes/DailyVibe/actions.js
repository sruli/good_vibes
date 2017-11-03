import {
  CURRENT_IMAGE_CHANGED,
  PLAY_TAPPED,
  PAUSE_TAPPED,
  SONG_FINISHED,
  TIMER_RESET,
  TIMER_SET,
} from './actionTypes';

export const currentImageChanged = nextImage => ({
  type: CURRENT_IMAGE_CHANGED,
  payload: { nextImage },
});

export const playTapped = () => ({
  type: PLAY_TAPPED,
});

export const pauseTapped = () => ({
  type: PAUSE_TAPPED,
});

export const songFinished = () => ({
  type: SONG_FINISHED,
});

export const imageTimerSet = timerKey => ({
  type: TIMER_SET,
  payload: { timerKey },
});

export const timerReset = () => ({
  type: TIMER_RESET,
});
