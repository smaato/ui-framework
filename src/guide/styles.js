
// Styles are JS module, basically a string of text.
// dist.css must be build and available before scripts are build.
// When dist.css is imported here this means it will be included in dist.js as a
// module and available inside JavaScript on the client-side.
// To add styles to the page CSS is appended inline into style element.
// If HMR is enabled this file gets re-executed.

// When working with styles with HMR enabled the order of events after the
// initial load is like this:
// 1. SCSS sources are changed
// 2. Gulp builds dist.css
// 3. Browserify sees dist.css changed and rebuilds dist.js
// 4. JS modules are updated on the client side
// 4. Inline styles are updated
import distCss from '../../dist/css/dist.css';

const styleElelementId = 'dist-css';
let styleElement = document.getElementById(styleElelementId);
if (!styleElement) {
  styleElement = document.createElement('style');
  styleElement.setAttribute('id', styleElelementId);
  document.head.appendChild(styleElement);
}
styleElement.textContent = distCss;

// 'module' variable comes from node.js module system, since ES6 is built on
// top of node.js it is still available
if (module.hot) {
  // Accept itself (code updates)
  module.hot.accept();
}
