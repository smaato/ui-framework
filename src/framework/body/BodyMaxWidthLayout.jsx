
import React from 'react';
import PropTypes from 'prop-types';

const BodyMaxWidthLayout = props => (
  <div className="bodyMaxWidthLayout">
    {props.children}
  </div>
);

BodyMaxWidthLayout.propTypes = {
  children: PropTypes.any,
};

export default BodyMaxWidthLayout;
