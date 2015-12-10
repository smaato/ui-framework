
import React, {
  PropTypes,
} from 'react';

const GridBodyEditableCell = props => {
  return (
    <a
      className="grid__body__cellValue--editable"
      href="#"
      onClick={props.onClick.bind(this)}
    >
      {props.children}
    </a>
  );
};

GridBodyEditableCell.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

export default GridBodyEditableCell;
