
import React, {
  PropTypes,
} from 'react';

import Button from '../button/Button.jsx';

const ButtonGroup = props => {
  return (
    <div className="buttonGroup">
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(Button),
};

export default ButtonGroup;
