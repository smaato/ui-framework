
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Icon = props => {
  const classes = classNames('icon', props.classes, {
    'icon--clickable': props.onClick,
  });

  return (
    <span
      className={classes}
      onClick={props.onClick}
    />
  );
};

Icon.propTypes = {
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
