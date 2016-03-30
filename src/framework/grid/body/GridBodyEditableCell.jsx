
import React, {
  PropTypes,
} from 'react';

const GridBodyEditableCell = props => {
  const onClick = props.onClick.bind(this);

  return (
    <a
      className="gridBodyEditableCell"
      href="#"
      onClick={onClick}
    >
      <span className="gridBodyEditableCell__content">
        {props.children}
      </span>
      <span className="gridBodyEditableCell__icon icon icon-cog" />
    </a>
  );
};

GridBodyEditableCell.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

export default GridBodyEditableCell;
