
import React, {
  PropTypes,
} from 'react';

const Link = props => {
  function onClick() {
    if (props.onClick) {
      props.onClick(props.data);
    }
  }

  let target;
  if (props.isTargetBlank) {
    target = '_blank';
  }

  return (
    <a
      className="link"
      href={props.href}
      onClick={onClick}
      data-id={props.dataId}
      target={target}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.any,
  isTargetBlank: PropTypes.bool,
};

export default Link;
