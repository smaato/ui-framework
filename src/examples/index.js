
// Import framework for use in our examples.
import framework from '../framework/index.js';

// Expose all framework components to the JSX in our examples.
Object.keys(framework).forEach((key) => {
  const component = framework[key];
  window[key] = component;
});

import GridExample from './components/Grid/GridExample.jsx';
window.GridExample = GridExample;

// Support inline JSX in our examples.
import React from 'react';
window.React = React;
import ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;
