
import React, {
  PropTypes,
} from 'react';

const GridControls = props => (
  <div className="grid__controls">
    <div className="grid__controls__liner">
      {props.children}
    </div>
  </div>
);

GridControls.propTypes = {
  children: PropTypes.any,
};

export default GridControls;
