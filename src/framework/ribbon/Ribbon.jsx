
import PropTypes from 'prop-types';
import React from 'react';

const Ribbon = props =>
  (<div
    data-testid="Ribbon"
    className="ribbon"
    style={{
      backgroundImage: `url(${props.imageSrc})`,
      backgroundSize: `${props.width} ${props.height}`,
      height: props.height,
      width: props.width,
    }}
  />);

Ribbon.propTypes = {
  height: PropTypes.string,
  imageSrc: PropTypes.string,
  width: PropTypes.string,
};

Ribbon.defaultProps = {
  height: '75px',
  width: '75px',
};

export default Ribbon;
