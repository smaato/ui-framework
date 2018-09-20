
import PropTypes from 'prop-types';
import React from 'react';

const BodyMaxWidthLayout = props => (
  <div className="bodyMaxWidthLayout">
    {props.children}
  </div>
);

BodyMaxWidthLayout.propTypes = {
  children: PropTypes.any,
};

export default BodyMaxWidthLayout;
