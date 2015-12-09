
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Label = props => {
  const classes = classNames('label', {
    'label--clickable': props.for,
  });

  return (
    <label
      className={classes}
      htmlFor={props.for}
    >
      {props.children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  for: PropTypes.string,
};

export default Label;
