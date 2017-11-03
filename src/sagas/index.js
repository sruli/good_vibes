import { take, takeEvery, put, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import 'regenerator-runtime/runtime';

// actionTypes
import { VIBE_FETCHED } from '../scenes/DailyVibe/data/vibe/actionTypes';
import {
  CURRENT_IMAGE_CHANGED,
  PAUSE_TAPPED,
  PLAY_TAPPED,
  SONG_FINISHED,
  TIMER_RESET,
} from '../scenes/DailyVibe/actionTypes';

// actions
import { vibeSetup } from '../scenes/DailyVibe/data/vibe/actions';
import { imageTimerSet, currentImageChanged, timerReset, songFinished } from '../scenes/DailyVibe/actions';

// selectors
import { getNextImage, getTimerKey, getPlaying, getMusicPlayer } from '../scenes/DailyVibe/reducer';
import { getSongFile } from '../scenes/DailyVibe/data/vibe/reducer';

// services
import { setupMusicPlayer, playSong, pauseSong, stopSong } from '../services/musicPlayer';
import { createMusicPlayerChannel, FINISHED } from '../channels/musicPlayer';

const playbackStatusUpdates = function* playbackStatusUpdates(musicPlayer) {
  const channel = yield call(createMusicPlayerChannel, musicPlayer);
  while (true) {
    const { songStatus } = yield take(channel);
    if (songStatus === FINISHED) {
      yield put(songFinished());
    }
  }
};

const onVibeFetched = function* onVibeFetched() {
  const songFile = yield select(getSongFile);
  const musicPlayer = yield call(setupMusicPlayer, songFile);
  yield put(vibeSetup(musicPlayer));
  yield call(playbackStatusUpdates, musicPlayer);
};

const onPlayTapped = function* onPlayTapped() {
  yield put(timerReset());
  const musicPlayer = yield select(getMusicPlayer);
  yield call(playSong, musicPlayer);
};

const onPauseTapped = function* onPauseTapped() {
  const musicPlayer = yield select(getMusicPlayer);
  yield call(pauseSong, musicPlayer);
};

const onSongFinished = function* onSongFinished() {
  const musicPlayer = yield select(getMusicPlayer);
  yield call(stopSong, musicPlayer);
};

const onTimerReset = function* onTimerReset() {
  const timerKey = Math.random().toString(36).substring(7);
  yield put(imageTimerSet(timerKey));
  yield delay(20000);
  const playing = yield select(getPlaying);
  const currentKey = yield select(getTimerKey);
  const nextImage = yield select(getNextImage);
  if ((currentKey === timerKey) && playing) {
    yield put(currentImageChanged(nextImage));
  }
};

const onCurrentImageChanged = function* onCurrentImageChanged() {
  const playing = yield select(getPlaying);
  if (playing) {
    yield put(timerReset());
  }
};

const dailyVibesSaga = function* dailyVibesSaga() {
  yield takeEvery(VIBE_FETCHED, onVibeFetched);
  yield takeEvery(PLAY_TAPPED, onPlayTapped);
  yield takeEvery(PAUSE_TAPPED, onPauseTapped);
  yield takeEvery(SONG_FINISHED, onSongFinished);
  yield takeEvery(TIMER_RESET, onTimerReset);
  yield takeEvery(CURRENT_IMAGE_CHANGED, onCurrentImageChanged);
};

export default dailyVibesSaga;
