
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const { dataId, isError, isFullWidth, isResizable, ...reducedProps } = props;
  const classes = classNames('textArea', props.className, {
    'is-text-box-error': isError,
    'textArea--fullWidth': isFullWidth,
    'textArea--resizable': isResizable,
  });

  const extendedProps = Object.assign({}, reducedProps, {
    className: classes,
  });

  return (
    <textarea
      data-id={dataId}
      {...extendedProps}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  dataId: PropTypes.string,
  isError: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isResizable: PropTypes.bool,
};

export default TextArea;
