
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const PickedListItem = props => {
  function onClickRemove() {
    props.onRemove(props.data);
  }

  const iconClasses = classNames('pickedListItemIcon', {
    'pickedListItemIcon--check glyphicons-ok-2': props.isAllowed,
    'pickedListItemIcon--ban glyphicons-ban': !props.isAllowed,
  });

  return (
    <div className="pickedListItem">
      <div className={iconClasses} />
      <div className="pickedListItem__label">
        {props.children}
      </div>
      <div
        className="pickedListItem__removeButton"
        onClick={onClickRemove}
      />
    </div>
  );
};

PickedListItem.propTypes = {
  children: PropTypes.string,
  data: PropTypes.any,
  isAllowed: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default PickedListItem;
