
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const FieldError = props => {
  const classes = classNames('fieldError', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <div {...extendedProps}>
      {props.children}
    </div>
  );
};

FieldError.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FieldError;
