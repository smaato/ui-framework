
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const FiltersDropdownButton = props => {
  const classes = classNames('filtersDropdownButton', {
    'is-filters-dropdown-open': props.isOpen,
  });

  return (
    <div
      className={classes}
      onClick={props.onClick}
    >
      +
    </div>
  );
};

FiltersDropdownButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default FiltersDropdownButton;
