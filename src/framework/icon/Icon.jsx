
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Icon = props => {
  const classes = classNames('icon', props.className, {
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
  onClick: PropTypes.func,
};

export default Icon;
