
import React from 'react';
import classNames from 'classnames';

const ColumnLayout = props => {
  const classes = classNames('columnLayout');

  return (
    <div className={classes}>
        {props.children}
    </div>
  );
};

export default ColumnLayout;
