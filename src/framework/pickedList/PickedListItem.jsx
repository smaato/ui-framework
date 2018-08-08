
import React from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';

const PickedListItem = (props) => {
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
      'pickedListItem__icon icon',
      typeToIconClassMap[props.type]
    );

    icon = <div className={iconClasses} />;
  }

  let meta;

  if (props.meta) {
    meta = (
      <div className="pickedListItem__meta">
        {props.meta}
      </div>
    );
  }

  let removeButton;

  if (props.onRemove) {
    removeButton = (
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
      {meta}
      {removeButton}
    </div>
  );
};

PickedListItem.TYPE = keyMirror({
  ALLOWED: null,
  NOT_ALLOWED: null,
});

PickedListItem.propTypes = {
  children: PropTypes.any,
  data: PropTypes.any,
  meta: PropTypes.any,
  onRemove: PropTypes.func,
  type: PropTypes.string,
};

export default PickedListItem;
