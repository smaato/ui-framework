
import React, {
  PropTypes,
} from 'react';

import classNames from 'classnames';

import GroupedButton from './GroupedButton.jsx';

const ButtonGroup = props => {
  const classes = classNames('buttonGroup', {
    'is-button-selected': props.selected,
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

ButtonGroup.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.arrayOf(GroupedButton),
};

export default ButtonGroup;
