
import React, {
  PropTypes,
} from 'react';

export {
  default as MenuItem,
} from './MenuItem.jsx';

const Menu = props => {
  return (
    <div className="menu">
      {props.children}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.any,
};

export default Menu;
