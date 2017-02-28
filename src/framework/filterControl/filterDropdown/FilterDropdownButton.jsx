
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const FilterDropdownButton = (props) => {
  const classes = classNames('filterDropdownButton', {
    'is-filter-dropdown-open': props.isOpen,
  });

  return (
    <div
      className={classes}
      onClick={props.onClick}
    >
      <div className="css-icon plus" />
    </div>
  );
};

FilterDropdownButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default FilterDropdownButton;
