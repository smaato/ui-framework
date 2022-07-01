
import PropTypes from 'prop-types';
import React from 'react';

export {
  default as MenuItem,
} from './MenuItem.jsx';

const Menu = props => (
  <div data-testid="Menu" data-id={props.dataId}>
    {props.children}
  </div>
);

Menu.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
};

export default Menu;
