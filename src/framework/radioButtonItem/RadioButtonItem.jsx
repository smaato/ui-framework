
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const RadioButtonItem = ({
  children,
  element,
  isActive,
  onSelect,
}) => {
  const classesForRadioButton = classNames({
    'radioButtonItem--inputRadioButton': true,
    'radioButtonItem--inputRadioButton-active': isActive,
  });

  return (
    <div
      className="radioButtonItem--element"
      onClick={() => onSelect(element)}
    >
      <div
        className={classesForRadioButton}
      />
      <div
        className="radioButtonItem--label"
      >
        {children}
      </div>
    </div>
  );
};

RadioButtonItem.defaultProps = {
  isActive: false,
};

RadioButtonItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  isActive: PropTypes.bool,
  element: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
};

export default RadioButtonItem;
