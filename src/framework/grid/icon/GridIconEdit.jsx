
import React from 'react';

import GridIcon from './GridIcon.jsx';

import IconCog from '../../icon/IconCog.jsx';

const GridIconEdit = props => {
  return (
    <GridIcon
      iconType={IconCog}
      onClick={props.onClick}
    />
  );
};

GridIconEdit.propTypes = {
  onClick: GridIcon.propTypes.onClick,
};

export default GridIconEdit;
