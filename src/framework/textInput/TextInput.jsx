
import React from 'react';
import classNames from 'classnames';

const TextInput = props => {
  const classes = classNames('textInput', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <input {...extendedProps} />
  );
};

export default TextInput;
