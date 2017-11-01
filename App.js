import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DailyVibe from './src/scenes/DailyVibe';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <DailyVibe />
  </Provider>
);

export default App;
