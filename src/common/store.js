import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import reducerRegistry from './reducerRegistry';

const initialReducers = {};

const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialReducers).forEach((item) => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

function configureStore() {
  const store = createStore(
    combine(reducerRegistry.getReducers()),
    compose(process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f),
  );

  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(combine(reducers));
  });

  if (module.hot) {
    module.hot.accept('./reducerRegistry', () => {
      const nextReducerRegistry = require('./reducerRegistry').default; // eslint-disable-line
      store.replaceReducer(combine(nextReducerRegistry.getReducers()));
    });
  }

  return store;
}

const store = configureStore();

export default store;
