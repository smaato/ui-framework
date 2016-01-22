
import React from 'react';

import GridIcon from './GridIcon.jsx';

import IconEllipsis from '../../icon/IconEllipsis.jsx';

const GridIconOptions = props => {
  return (
    <GridIcon
      iconType={IconEllipsis}
      onClick={props.onClick}
    />
  );
};

GridIconOptions.propTypes = {
  onClick: GridIcon.propTypes.onClick,
};

export default GridIconOptions;
