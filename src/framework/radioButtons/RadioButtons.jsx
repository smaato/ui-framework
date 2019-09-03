import PropTypes from 'prop-types';
import React from 'react';

import RadioButtonItem from '../radioButtonItem/RadioButtonItem.jsx';

const RadioButtons = ({
  className,
  elements,
  name,
  onSelect,
  selectedElement,
}) => {
  const radioElements = elements.map((element, index) => (
    <RadioButtonItem
      element={element}
      index={index}
      isActive={selectedElement === index}
      key={index}
      name={name}
      onSelect={onSelect}
    />
  ));

  return (
    <div
      className={
        `radioButtons${className ? ` ${className}` : ''}`
      }
    >
      {radioElements}
    </div>
  );
};

RadioButtons.propTypes = {
  className: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })).isRequired,
  name: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selectedElement: PropTypes.number,
};

export default RadioButtons;
