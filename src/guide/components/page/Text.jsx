
import React from 'react';
import PropTypes from 'prop-types';

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
