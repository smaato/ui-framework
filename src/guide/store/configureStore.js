import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {
  reduxReactRouter,
  routerStateReducer,
} from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

/**
 * @param {Object} initialState An object defining the application's initial
 * state.
 */
export default function configureStore(initialState) {
  function rootReducer(state = {}, action) {
    const router = routerStateReducer(state.router, action);
    return {
      router: router,
    };
  }

  const finalStore = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      createHistory: createBrowserHistory,
    })
  )(createStore)(rootReducer, initialState);

  return finalStore;
}
