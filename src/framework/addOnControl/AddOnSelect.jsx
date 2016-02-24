
import React, {
  PropTypes,
} from 'react';

const AddOnSelect = props => {
  return (
    <select className="addOnSelect">
      {props.children}
    </select>
  );
};

AddOnSelect.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AddOnSelect;
