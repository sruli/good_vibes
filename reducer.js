import { combineReducers } from 'redux';
import dailyVibeReducer from './src/scenes/DailyVibe/reducer';

export default combineReducers({
  DailyVibe: dailyVibeReducer,
});
