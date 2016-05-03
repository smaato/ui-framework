
import React, {
  PropTypes,
} from 'react';

const VerticalLayout = props => {
  function wrap(item, index) {
    return (
      <div
        className="verticalLayoutItem"
        key={index}
      >
        {item}
      </div>
    );
  }

  let children;

  if (Array.isArray(props.children)) {
    children = props.children.map((item, index) => wrap(item, index));
  } else if (props.children) {
    children = wrap(props.children);
  }

  return (
    <div>
      {children}
    </div>
  );
};

VerticalLayout.propTypes = {
  children: PropTypes.any,
};

export default VerticalLayout;
