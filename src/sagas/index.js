import { takeEvery, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import 'regenerator-runtime/runtime';
import { PLAY_TAPPED, TIMER_RESET } from '../scenes/DailyVibe/actionTypes';
import { imageTimerSet, currentImageChanged, timerReset } from '../scenes/DailyVibe/actions';
import { getNextImage, getTimerKey, getPlaying } from '../scenes/DailyVibe/reducer';

const onPlayTapped = function* onPlayTapped() {
  yield put(timerReset());
};

const onTimerReset = function* onTimerReset() {
  const timerKey = Math.random().toString(36).substring(7);
  yield put(imageTimerSet(timerKey));
  yield delay(10000);
  const playing = yield select(getPlaying);
  const currentKey = yield select(getTimerKey);
  const nextImage = yield select(getNextImage);
  if ((currentKey === timerKey) && playing) {
    yield put(timerReset());
    yield put(currentImageChanged(nextImage));
  }
};

const dailyVibesSaga = function* dailyVibesSaga() {
  yield takeEvery(PLAY_TAPPED, onPlayTapped);
  yield takeEvery(TIMER_RESET, onTimerReset);
};

export default dailyVibesSaga;
