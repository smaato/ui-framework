
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Text from '../text/Text.jsx';

const RadioButtonItem = ({
  element,
  index,
  isActive,
  name,
  onSelect,
}) => {
  const classesForRadioButton = classNames({
    'radioButtonItem--inputRadioButton': true,
    'radioButtonItem--inputRadioButton-active': isActive,
  });

  return (
    <div
      className="radioButtonItem--element"
      onClick={() => onSelect(index)}
    >
      <div
        className={classesForRadioButton}
        name={name}
      />
      <div
        className="radioButtonItem--label"
      >
        <Text>{element.label}</Text>
      </div>
    </div>
  );
};

RadioButtonItem.defaultProps = {
  isActive: false,
};

RadioButtonItem.propTypes = {
  element: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default RadioButtonItem;
