
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const MenuItem = props => {
  function onClick() {
    if (props.onClick) {
      props.onClick(props.data);
    }
  }

  let meta;

  if (props.meta) {
    meta = (
      <div className="menuItem__meta">
        {props.meta}
      </div>
    );
  }

  let actions;

  if (props.actions) {
    actions = (
      <div className="menuItem__actions">
        {props.actions}
      </div>
    );
  }

  const classes = classNames('menuItem', {
    'is-menu-item-selected': props.isSelected,
    'menuItem--clickable': props.onClick,
  });

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <div className="menuItem__label">
        {props.label}
      </div>

      {meta}

      {actions}
    </div>
  );
};

MenuItem.HEIGHT = 33;

MenuItem.propTypes = {
  label: PropTypes.any,
  meta: PropTypes.any,
  actions: PropTypes.any,
  isSelected: PropTypes.bool,
  data: PropTypes.any,
  onClick: PropTypes.func,
};

export default MenuItem;
