
import PropTypes from 'prop-types';
import React from 'react';

const CardHolder = (props) => {
  const holderStyle = {
    gridTemplateColumns:
      `repeat(auto-fit, minmax(${props.childrenMinWidth}, 1fr))`,
  };
  const content = props.children.map((child, index) => (
    <div className="cardHolder__wrapper" key={index}>
      {child}
    </div>
  ));
  if (props.amountPerRow) {
    while (content.length < props.amountPerRow) {
      content.push(
        <div className="cardHolder__wrapper" key={content.length} />
      );
    }
  }

  return (
    <div data-testid="CardHolder" className="cardHolder" style={holderStyle}>
      {content}
    </div>
  );
};

CardHolder.propTypes = {
  amountPerRow: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element),
  childrenMinWidth: PropTypes.string,
};

CardHolder.defaultProps = {
  childrenMinWidth: '220px',
};

export default CardHolder;
