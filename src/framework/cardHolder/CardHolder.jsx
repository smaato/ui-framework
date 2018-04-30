import React, {
  PropTypes,
} from 'react';

const CardHolder = (props) => {
  const childrenMinWidth = props.childrenMinWidth
  ? props.childrenMinWidth : '240px';

  const holderStyle = {
    gridTemplateColumns: `repeat(auto-fit, minmax(${childrenMinWidth}, 1fr))`,
  };

  return (
    <div className="card-holder" style={holderStyle}>
      {props.children.map((child, index) => (
        <div key={index} className="card-holder-card-wrapper">
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

export default CardHolder;
