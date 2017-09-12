
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

import Dropdown from './Dropdown.jsx';

const DropdownGroup = (props) => {
  const optionToList = props.options.reduce(
    (accumulator, optionList, currentIndex) => (
      accumulator.concat(optionList.map((option, index) => (
        Object.assign({}, option, {
          class: classNames(props.optionsClass[currentIndex], {
            dropdownGroupFirst: (accumulator.length > 0 && index === 0),
          }),
        })
      )))
    ),
  []);

  const extendedProps = Object.assign({}, props, {
    options: optionToList,
  });

  return (
    <Dropdown
      {...extendedProps}
    />
  );
};

DropdownGroup.propTypes = Object.assign({}, Dropdown.propTypes, {
  optionsClass: PropTypes.array,
});

DropdownGroup.defaultProps = Object.assign({}, Dropdown.defaultProps, {
  classes: 'dropdownGroup',
});

export default DropdownGroup;
