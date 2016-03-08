
import React, {
  PropTypes,
} from 'react';

const PanelLayout = props => {
  return (
    <div className="panelLayout">
      {props.children}
    </div>
  );
};

PanelLayout.propTypes = {
  children: PropTypes.any,
};

export default PanelLayout;
