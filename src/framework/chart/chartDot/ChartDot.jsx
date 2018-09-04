
import PropTypes from 'prop-types';
import React from 'react';

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
