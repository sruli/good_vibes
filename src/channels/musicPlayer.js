import { eventChannel } from 'redux-saga';

export const FINISHED = 'musicPlayer.FINISHED';

export const createMusicPlayerChannel = musicPlayer => (
  eventChannel((emitter) => {
    musicPlayer.setOnPlaybackStatusUpdate((playbackStatus) => {
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        emitter({ songStatus: FINISHED });
      }
    });
    return () => {};
  })
);
