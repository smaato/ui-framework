
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const GridIcon = props => {
  const typeToIconClassMap = {
    [GridIcon.TYPE.EDIT]: 'icon-cog',
    [GridIcon.TYPE.OPTIONS]: 'icon-ellipsis',
  };

  const classes = classNames(
    'gridIcon icon',
    typeToIconClassMap[props.type]
  );

  return (
    <div
      className={classes}
      onClick={props.onClick}
    />
  );
};

GridIcon.TYPE = {
  EDIT: 'EDIT',
  OPTIONS: 'OPTIONS',
};

GridIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default GridIcon;
