
import React, {
  PropTypes,
} from 'react';

import Column from './Column.jsx';

const ColumnLayout = props => {
  return (
    <div
      data-id={props.dataId}
      className="columnLayout"
    >
      {props.children}
    </div>
  );
};

ColumnLayout.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.instanceOf(Column)).isRequired,
};

export default ColumnLayout;
