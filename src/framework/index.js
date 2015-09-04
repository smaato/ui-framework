
// ES6 polyfill, courtesy of Babel.
import 'babel-core/polyfill';

// Import framework separately to disregard the polyfill on release
import framework from './framework';

export default framework;
