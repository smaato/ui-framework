
// ES6 polyfill, courtesy of Babel.
import 'babel-core/polyfill';

// Import components.
import TitleBar from './titleBar/TitleBar.jsx';
import TitleBarButton from './titleBar/TitleBarButton.jsx';

// Export components.
export default {
  TitleBar: TitleBar,
  TitleBarButton: TitleBarButton
}