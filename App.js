import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import DailyVibe from './src/scenes/DailyVibe';
import reducer from './reducer';
import saga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

const App = () => (
  <Provider store={store}>
    <DailyVibe />
  </Provider>
);

export default App;
