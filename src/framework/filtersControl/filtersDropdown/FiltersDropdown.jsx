
import React, {
  PropTypes,
} from 'react';

const FiltersDropdown = props => (
  <div className="filtersDropdown">
    <div className="filtersDropdown__header">
      Add a Filter
      <span
        className="icon icon-remove"
        onClick={props.onClose}
      />
    </div>
    {props.children}
  </div>
);

FiltersDropdown.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func.isRequired,
};

export default FiltersDropdown;
