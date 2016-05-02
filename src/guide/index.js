
import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  useRouterHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createHashHistory from 'history/lib/createHashHistory';

// Store.
import configureStore from './store/configureStore';

// Guide views.
import AppContainer from './views/AppContainer';
import HomeView from './views/home/HomeView.jsx';
import NotFoundView from './views/notFound/NotFoundView.jsx';

import Route from './services/route/Route';

// Polyfills
import { polyfillCustomEvent } from '../framework/services';
polyfillCustomEvent();

const store = configureStore();
const browserHistory = useRouterHistory(createHashHistory)({
  queryKey: false,
});
const history = syncHistoryWithStore(browserHistory, store);

const childRoutes = Route.getAppRoutes();
childRoutes.push({
  path: '*',
  component: NotFoundView,
  name: 'Page Not Found',
});

const routes = [{
  path: '/',
  component: AppContainer,
  indexRoute: {
    component: HomeView,
  },
  childRoutes,
}];

// Update document title with route name.
const onRouteEnter = route => {
  const leafRoute = route.routes[route.routes.length - 1];
  document.title = leafRoute.name ?
    `Smaato UI Framework - ${leafRoute.name}` :
    'Smaato UI Framework';
};

const syncTitleWithRoutes = routesList => {
  if (!routesList) return;
  routesList.forEach(route => {
    route.onEnter = onRouteEnter; // eslint-disable-line no-param-reassign
    if (route.indexRoute) {
      // Index routes have a weird relationship with their "parent" routes,
      // so it seems we need to give their own onEnter hooks.
      route.indexRoute.onEnter = onRouteEnter; // eslint-disable-line no-param-reassign
    }
    syncTitleWithRoutes(route.childRoutes);
  });
};

syncTitleWithRoutes(routes);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
);
