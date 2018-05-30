
import React, {
  PropTypes,
} from 'react';

const CardHolder = (props) => {
  const holderStyle = {
    gridTemplateColumns:
      `repeat(auto-fit, minmax(${props.childrenMinWidth}, 1fr))`,
  };

  return (
    <div className="cardHolder" style={holderStyle}>
      {props.children.map((child, index) => (
        <div key={index} className="cardHolder__wrapper">
          {child}
        </div>
      ))}
    </div>
  );
};

CardHolder.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  childrenMinWidth: PropTypes.string,
};

CardHolder.defaultProps = {
  childrenMinWidth: '220px',
};

export default CardHolder;
