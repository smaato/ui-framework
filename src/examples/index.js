
// Import framework for use in our examples.
import {
  CheckBox,
  Grid,
  GridLoadingRow,
  Icon,
  IconCog,
  IconEllipsis,
  Spinner,
  TitleBar,
  TitleBarButton,
} from '../framework/framework.js';

window.CheckBox = CheckBox;
window.Grid = Grid;
window.GridLoadingRow = GridLoadingRow;
window.Icon = Icon;
window.IconCog = IconCog;
window.IconEllipsis = IconEllipsis;
window.Spinner = Spinner;
window.TitleBar = TitleBar;
window.TitleBarButton = TitleBarButton;

import GridExample from './components/Grid/GridExample.jsx';
window.GridExample = GridExample;

// Support inline JSX in our examples.
import React from 'react';
window.React = React;
import ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;
import '../../vendor/JSXTransformer.min.js';
