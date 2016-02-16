
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const FieldMessage = props => {
  const classes = classNames('fieldMessage', props.className);

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  return (
    <div {...extendedProps}>
      {props.children}
    </div>
  );
};

FieldMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FieldMessage;
