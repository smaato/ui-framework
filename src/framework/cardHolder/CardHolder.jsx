import React, {
  PropTypes,
} from 'react';

const CardHolder = props => <div className="card-holder">
  {props.children.map((child, index) => {
    return (
      <div key={index} className="card-holder-card-wrapper">
        {child}
      </div>
    );
  })}
</div>;

CardHolder.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default CardHolder;
