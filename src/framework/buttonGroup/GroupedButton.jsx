
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Button from '../button/Button.jsx';

const GroupedButton = props => {
  const classes = classNames('button--grouped', props.classes, {
    'is-button-selected': props.selected,
  });

  const extendedProps = Object.assign({}, props, {
    classes: classes,
  });

  return (
    <Button {...extendedProps} />
  );
};

GroupedButton.propTypes = Object.assign(
  Button.propTypes,
  {
    disabled: PropTypes.bool,
  }
);

export default GroupedButton;
