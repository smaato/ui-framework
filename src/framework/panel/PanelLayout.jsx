
import React from 'react';
import PropTypes from 'prop-types';

const PanelLayout = props => (
  <div className="panelLayout">
    {props.children}
  </div>
);

PanelLayout.propTypes = {
  children: PropTypes.any,
};

export default PanelLayout;
