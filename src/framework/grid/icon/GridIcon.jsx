
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

const GridIcon = props => {
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

  return (
    <div
      className={classes}
      onClick={props.onClick}
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
};

export default GridIcon;
