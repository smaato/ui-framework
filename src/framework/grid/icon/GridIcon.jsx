
import React, {
  PropTypes,
} from 'react';

const GridIcon = props => {
  return (
    <div
      className="gridIcon"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

GridIcon.propTypes = {
  onClick: PropTypes.func,
};

export default GridIcon;
