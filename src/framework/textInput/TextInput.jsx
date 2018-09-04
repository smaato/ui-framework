
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TextInput = (props) => {
  const {
    dataId,
    isError,
    isFullWidth,
    isReadonly,
    ...reducedProps
  } = props;

  const classes = classNames('textInput', props.className, {
    'textInput--fullWidth': isFullWidth,
    'is-text-input-error': isError,
  });

  const extendedProps = Object.assign({}, reducedProps, {
    className: classes,
  });

  return (
    <input
      data-id={dataId}
      disabled={isReadonly}
      {...extendedProps}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  dataId: PropTypes.string,
  isError: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isReadonly: PropTypes.bool,
};

export default TextInput;
