
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

import Route from './services/route/Route';

const NotFoundView = React.createClass({
  render() {
    return (
      <h4>Page Not found!</h4>
    );
  },
});

const store = configureStore();

const childRoutes = Route.getList();
childRoutes.push({
  path: '*',
  component: NotFoundView,
});

const routes = [{
  path: '/',
  component: App,
  indexRoute: {
    component: HomeView,
  },
  childRoutes: childRoutes,
}];

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>,
  document.getElementById('app')
);
