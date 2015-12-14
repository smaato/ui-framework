
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const TextInput = props => {
  const classes = classNames('textInput', props.className, {
    'textInput--fullWidth': props.isFullWidth,
  });

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <input {...extendedProps} />
  );
};

TextInput.propTypes = {
  isFullWidth: PropTypes.bool,
};

export default TextInput;
