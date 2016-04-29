import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import {
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';

/**
 * @param {Object} initialState An object defining the application's initial
 * state.
 */
export default function configureStore(initialState) {
  function rootReducer(state = {}, action) {
    return {
      routing: routerReducer(state.routing, action),
    };
  }

  const finalStore = compose(
    applyMiddleware(
      thunk,
      routerMiddleware(browserHistory)
    )
  )(createStore)(rootReducer, initialState);

  return finalStore;
}
