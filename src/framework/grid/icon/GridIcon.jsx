
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

const GridIcon = (props) => {
  const typeToIconClassMap = {
    [GridIcon.TYPE.EDIT]: 'icon-cog',
    [GridIcon.TYPE.OPTIONS]: 'icon-ellipsis',
  };

  const classes = classNames(
    'gridIcon',
    typeToIconClassMap[props.type],
    {
      icon: props.type,
    }
  );

  function onClick(event) {
    if (props.onClick) {
      props.onClick(props.data, event);
    }
  }

  return (
    <div
      className={classes}
      onClick={onClick}
    />
  );
};

GridIcon.TYPE = keyMirror({
  EDIT: null,
  OPTIONS: null,
});

GridIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.any,
};

export default GridIcon;
