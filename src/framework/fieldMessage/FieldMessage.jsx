
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const FieldMessage = props => {
  const classes = classNames('fieldMessage', props.className, {
    'does-field-message-have-childs-width': props.hasChildsWidth,
  });

  const extendedProps = Object.assign({}, props, {
    className: classes,
  });

  let balloon;

  if (props.isDisplayed) {
    balloon = (
      <div className="fieldMessageBalloon">
        {props.message}
      </div>
    );
  }

  return (
    <div {...extendedProps}>
      {props.children}
      {balloon}
    </div>
  );
};

FieldMessage.propTypes = {
  children: PropTypes.element.isRequired,
  message: PropTypes.string.isRequired,
  hasChildsWidth: PropTypes.bool,
  isDisplayed: PropTypes.bool,
};

FieldMessage.defaultProps = {
  hasChildsWidth: false,
  isDisplayed: false,
};

export default FieldMessage;
