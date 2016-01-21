
import React from 'react';

import GridIcon from './GridIcon.jsx';

import {
  IconEllipsis,
} from '../../icon/Icon.jsx';

const GridIconOptions = props => {
  return (
    <GridIcon onClick={props.onClick}>
      <IconEllipsis />
    </GridIcon>
  );
};

GridIconOptions.propTypes = {
  onClick: GridIcon.propTypes.onClick,
};

export default GridIconOptions;
