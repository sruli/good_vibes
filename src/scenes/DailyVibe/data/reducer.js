import { combineReducers } from 'redux';
import vibeReducer from './vibe/reducer';

export default combineReducers({
  vibe: vibeReducer,
});
