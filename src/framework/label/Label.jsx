
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Label = props => {
  const classes = classNames('label', props.className, {
    'label--clickable': props.htmlFor,
  });

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <label {...extendedProps} />
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
};

export default Label;
