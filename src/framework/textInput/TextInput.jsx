
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const TextInput = props => {
  const classes = classNames('textInput', props.className, {
    'textInput--fullWidth': props.isFullWidth,
    'is-text-input-error': props.isError,
  });

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <input
      data-id={props.dataId}
      {...extendedProps}
    />
  );
};

TextInput.propTypes = {
  dataId: PropTypes.string,
  isError: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

export default TextInput;
