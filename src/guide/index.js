
import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

// Store.
import configureStore from './store/configureStore';

// Guide views.
import App from './views/App.jsx';
import HomeView from './views/home/HomeView.jsx';
import NotFoundView from './views/notFound/NotFoundView.jsx';

import Route from './services/route/Route';

const store = configureStore();

const childRoutes = Route.getList();
childRoutes.push({
  path: '*',
  component: NotFoundView,
  name: 'Page Not Found',
});

const routes = [{
  path: '/',
  component: App,
  indexRoute: {
    component: HomeView,
  },
  childRoutes: childRoutes,
}];

// Update document title with route name.
const onRouteEnter = (route) => {
  const leafRoute = route.routes[route.routes.length - 1];
  document.title = leafRoute.name ? `Smaato UI Framework - ${leafRoute.name}` : 'Smaato UI Framework';
};
const syncTitleWithRoutes = routesList => {
  if (!routesList) return;
  routesList.forEach(route => {
    route.onEnter = onRouteEnter;
    if (route.indexRoute) {
      // Index routes have a weird relationship with their "parent" routes,
      // so it seems we need to give their own onEnter hooks.
      route.indexRoute.onEnter = onRouteEnter;
    }
    syncTitleWithRoutes(route.childRoutes);
  });
};
syncTitleWithRoutes(routes);

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>,
  document.getElementById('app')
);
