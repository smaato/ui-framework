
import React, {
  PropTypes,
} from 'react';

import classNames from 'classnames';

import Button from '../button/Button.jsx';

const ButtonGroup = props => {
  const classes = classNames('buttonGroup', props.classes);

  return (
    <div
      className={classes}
    >
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(Button),
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default ButtonGroup;
