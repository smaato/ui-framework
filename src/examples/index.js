
import './_partials/navigation.js';

import checkBox from './components/CheckBox/checkBox.js';
import grid from './components/Grid/grid.js';
import spinner from './components/Spinner/spinner.js';
import titleBar from './components/titleBar/titleBar.js';

// This holds scripts for each example page
const _pages = {
  checkBox,
  grid,
  spinner,
  titleBar,
};

// This is just a wrapper to hold all global stuff, to pollute less
const app = {
  // This executes scripts for a specific page
  render: (key) => _pages[key](),
};

window.app = app;
