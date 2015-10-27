
import './navigation.js';

import checkBox from './components/checkBox/checkBox.js';
import grid from './components/grid/grid.js';
import icon from './components/icon/icon.js';
import spinner from './components/spinner/spinner.js';
import titleBar from './components/titleBar/titleBar.js';

// Holds scripts for each example page
const _pages = {
  checkBox,
  grid,
  icon,
  spinner,
  titleBar,
};

// A wrapper to hold all global stuff
const app = {
  // This executes scripts for a specific page
  render: (key) => _pages[key](),
};

// The only global variable we export to window
window.app = app;
