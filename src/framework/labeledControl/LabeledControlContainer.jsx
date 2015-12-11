
import React from 'react';

const LabeledControlContainer = props => {
  function wrap(item, index) {
    return (
      <div
        className="labeledControlContainer__item"
        key={index}
      >
        {item}
      </div>
    );
  }

  let children;

  if (Array.isArray(props.children)) {
    children = props.children.map((item, index) => {
      return wrap(item, index);
    });
  } else if (props.children) {
    children = wrap(props.children);
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default LabeledControlContainer;
