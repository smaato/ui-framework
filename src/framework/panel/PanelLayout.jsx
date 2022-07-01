
import PropTypes from 'prop-types';
import React from 'react';

const PanelLayout = props => (
  <div data-testid="PanelLayout" className="panelLayout">
    {props.children}
  </div>
);

PanelLayout.propTypes = {
  children: PropTypes.any,
};

export default PanelLayout;
