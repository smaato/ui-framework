
import React from 'react';
import PropTypes from 'prop-types';

const DescriptionText = props => (
  <div className="descriptionText">
    {props.children}
  </div>
);

DescriptionText.propTypes = {
  children: PropTypes.any,
};

export default DescriptionText;
