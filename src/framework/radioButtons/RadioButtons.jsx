
import React from 'react';
import PropTypes from 'prop-types';

const RadioButtons = ({
  className,
  elements,
  elementProvider,
  onSelect,
}) => {
  const radioElements = elements.map((element, index) => (
    <React.Fragment key={index}>
      {elementProvider(element, onSelect)}
    </React.Fragment>
  ));

  return (
    <div
      data-testid="RadioButtons"
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
  elementProvider: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RadioButtons;
