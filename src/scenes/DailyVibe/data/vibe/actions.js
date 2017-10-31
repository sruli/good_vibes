import { VIBE_FETCHED } from './actionTypes';

export const vibeFetched = () => {
  const vibeId = 0;
  return {
    type: VIBE_FETCHED,
    payload: { vibeId },
  };
};
