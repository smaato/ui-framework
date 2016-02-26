
import React, {
  PropTypes,
} from 'react';

const GridBodyEditableCell = props => {
  const onClick = props.onClick.bind(this);

  return (
    <a
      className="grid__body__cellValue--editable"
      href="#"
      onClick={onClick}
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
