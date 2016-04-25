
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

const PickedListItem = props => {
  function onClickRemove() {
    props.onRemove(props.data);
  }

  let icon;

  if (props.type) {
    const typeToIconClassMap = {
      [PickedListItem.TYPE.ALLOWED]: 'icon-check-green',
      [PickedListItem.TYPE.NOT_ALLOWED]: 'icon-not-allowed-red',
    };

    const iconClasses = classNames(
      'pickedListItemIcon icon',
      typeToIconClassMap[props.type]
    );

    icon = <div className={iconClasses} />;
  }

  let clickRemove;

  if (props.onRemove) {
    clickRemove = (
      <div
        className="pickedListItem__removeButton"
        onClick={onClickRemove}
      />
    );
  }

  return (
    <div className="pickedListItem">
      {icon}
      <div className="pickedListItem__label">
        {props.children}
      </div>
      {clickRemove}
    </div>
  );
};

PickedListItem.TYPE = keyMirror({
  ALLOWED: null,
  NOT_ALLOWED: null,
});

PickedListItem.propTypes = {
  children: PropTypes.string,
  data: PropTypes.any,
  type: PropTypes.string,
  onRemove: PropTypes.func,
};

export default PickedListItem;
