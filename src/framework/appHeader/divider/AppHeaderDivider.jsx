
import React from 'react';
import PropTypes from 'prop-types';

const AppHeaderDivider = props => (
  <div className="appHeaderDivider">
    {props.left}
    <div className="appHeaderDivider__divider" />
    {props.right}
  </div>
);

AppHeaderDivider.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default AppHeaderDivider;
