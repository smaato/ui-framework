
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const filtersDropdownButton = props => {
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

filtersDropdownButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default filtersDropdownButton;
