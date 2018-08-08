
import React from 'react';
import PropTypes from 'prop-types';

const ChartDot = props => (
  <div
    className="chartDot"
    style={{
      backgroundColor: props.color,
      border: `1px solid ${props.color}`,
    }}
  />
);

ChartDot.propTypes = {
  color: PropTypes.string,
};

export default ChartDot;
