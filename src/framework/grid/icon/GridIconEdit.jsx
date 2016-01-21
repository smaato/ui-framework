
import React from 'react';

import GridIcon from './GridIcon.jsx';

import {
  IconCog,
} from '../../icon/Icon.jsx';

const GridIconEdit = props => {
  return (
    <GridIcon onClick={props.onClick}>
      <IconCog />
    </GridIcon>
  );
};

GridIconEdit.propTypes = {
  onClick: GridIcon.propTypes.onClick,
};

export default GridIconEdit;
