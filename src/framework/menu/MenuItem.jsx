
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const MenuItem = props => {
  function onClick() {
    if (props.onClick) {
      props.onClick(props.item);
    }
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

      <div className="menuItem__actions">
        {props.actions}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  label: PropTypes.any,
  actions: PropTypes.any,
  isSelected: PropTypes.bool,
  item: PropTypes.object,
  onClick: PropTypes.func,
};

export default MenuItem;
