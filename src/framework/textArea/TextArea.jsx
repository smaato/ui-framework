
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const TextArea = props => {
  const classes = classNames('textArea', props.className, {
    'textArea--fullWidth': props.isFullWidth,
    'textArea--resizable': props.isResizable,
    'is-text-box-error': props.isError,
  });

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <textarea
      data-id={props.dataId}
      {...extendedProps}
    />
  );
};

TextArea.propTypes = {
  dataId: PropTypes.string,
  isError: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isResizable: PropTypes.bool,
};

export default TextArea;
