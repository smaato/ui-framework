
import PropTypes from 'prop-types';
import React from 'react';

const CardRibbon = props =>
  (<div className="cardRibbon">
    <img
      alt="Ribbon"
      className="cardRibbon__image"
      src={props.imageSrc}
      style={{ height: props.height, width: props.width }}
    />
  </div>);

CardRibbon.propTypes = {
  imageSrc: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

CardRibbon.defaultProps = {
  width: '75px',
  height: '75px',
};

export default CardRibbon;
