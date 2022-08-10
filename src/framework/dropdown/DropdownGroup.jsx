
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Dropdown from './Dropdown.jsx';

const DropdownGroup = (props) => {
  const options = props.options.reduce(
    (accumulator, optionList, currentIndex) => {
      let currentList = optionList;

      if (props.optionGroupClasses) {
        currentList = optionList.map(option => (
          Object.assign({}, option, {
            classes: props.optionGroupClasses[currentIndex],
          })
        ));
      }

      if (accumulator.length > 0) {
        Object.assign(currentList[0], {
          classes: classNames(currentList[0].classes, 'dropdownGroup--first'),
        });
      }
      return accumulator.concat(currentList);
    },
  []);

  const extendedProps = Object.assign({}, props, {
    options,
  });

  return (
    <Dropdown
      data-testid="DropdownGroup"
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
