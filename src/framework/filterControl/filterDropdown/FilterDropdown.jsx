
import React, {
  PropTypes,
} from 'react';

const FilterDropdown = props => (
  <div className="filterDropdown">
    {props.children}
  </div>
);

FilterDropdown.propTypes = {
  children: PropTypes.any,
};

export default FilterDropdown;
