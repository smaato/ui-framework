
import React, {
  PropTypes,
} from 'react';

const FiltersDropdown = props => (
  <div className="filtersDropdown">
    {props.children}
  </div>
);

FiltersDropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default FiltersDropdown;
