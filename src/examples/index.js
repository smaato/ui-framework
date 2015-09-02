
// Import framework for use in our examples.
import framework from '../framework/index.js';

// Expose all framework components to the JSX in our examples.
for (let key in framework) {
  const component = framework[key];
  window[key] = component;
}

// Support inline JSX in our examples.
import React from 'react';
window.React = React;
import jsxTransformer from '../../vendor/JSXTransformer.min.js';