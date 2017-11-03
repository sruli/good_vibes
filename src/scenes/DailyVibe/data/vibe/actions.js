import { VIBE_FETCHED, VIBE_SETUP } from './actionTypes';

export const vibeFetched = () => {
  const indexes = [0, 1, 2];
  const vibeId = indexes[Math.floor(Math.random() * indexes.length)];
  return {
    type: VIBE_FETCHED,
    payload: { vibeId },
  };
};

export const vibeSetup = musicPlayer => ({
  type: VIBE_SETUP,
  payload: { musicPlayer },
});

