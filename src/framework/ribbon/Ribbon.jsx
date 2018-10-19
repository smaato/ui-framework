
import PropTypes from 'prop-types';
import React from 'react';

const Ribbon = props =>
  (<div
    className="ribbon"
    style={{
      height: props.height,
      width: props.width,
      backgroundImage: `url(${props.imageSrc})`,
      backgroundSize: `${props.width} ${props.height}`,
    }}
  />);

Ribbon.propTypes = {
  imageSrc: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Ribbon.defaultProps = {
  width: '75px',
  height: '75px',
};

export default Ribbon;
