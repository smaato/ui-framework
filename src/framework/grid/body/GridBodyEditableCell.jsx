
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
      {props.content}
    </a>
  );
};

GridBodyEditableCell.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridBodyEditableCell;
