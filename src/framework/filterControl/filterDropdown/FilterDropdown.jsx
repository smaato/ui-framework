
import React from 'react';
import PropTypes from 'prop-types';

const FilterDropdown = props => (
  <div className="filterDropdown">
    {props.children}
  </div>
);

FilterDropdown.propTypes = {
  children: PropTypes.any,
};

export default FilterDropdown;
