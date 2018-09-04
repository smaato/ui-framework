
import PropTypes from 'prop-types';
import React from 'react';

const Text = props => (
  <div className="examplePageText">
    {props.children}
  </div>
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Text;
