import { VIBE_FETCHED } from './actionTypes';

export const vibeFetched = () => {
  const indexes = [0, 1, 2];
  const vibeId = indexes[Math.floor(Math.random() * indexes.length)];
  return {
    type: VIBE_FETCHED,
    payload: { vibeId },
  };
};
