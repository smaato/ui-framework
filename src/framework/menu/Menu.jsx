
import React from 'react';
import PropTypes from 'prop-types';

export {
  default as MenuItem,
} from './MenuItem.jsx';

const Menu = props => (
  <div data-id={props.dataId}>
    {props.children}
  </div>
);

Menu.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
};

export default Menu;
