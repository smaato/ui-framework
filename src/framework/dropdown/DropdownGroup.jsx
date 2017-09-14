
import classNames from 'classnames';
import React, {
  PropTypes,
} from 'react';

import Dropdown from './Dropdown.jsx';

const DropdownGroup = (props) => {
  const options = props.options.reduce(
    (accumulator, optionList, currentIndex) => (
      accumulator.concat(optionList.map((option, index) => (
        Object.assign({}, option, {
          classes: classNames(props.optionGroupClasses[currentIndex], {
            'dropdownGroup--first': (accumulator.length > 0 && index === 0),
          }),
        })
      )))
    ),
  []);

  const extendedProps = Object.assign({}, props, {
    options,
  });

  return (
    <Dropdown
      {...extendedProps}
    />
  );
};

DropdownGroup.propTypes = Object.assign({}, Dropdown.propTypes, {
  optionGroupClasses: PropTypes.array,
});

DropdownGroup.defaultProps = Object.assign({}, Dropdown.defaultProps, {
  classes: 'dropdownGroup',
});

export default DropdownGroup;
