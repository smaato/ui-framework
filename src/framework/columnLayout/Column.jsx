
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const Column = props => {
  const classes = classNames('column--' + `${props.width}`);

  return (
    <div
      data-id={props.dataId}
      className={classes}
    >
      {props.children}
    </div>
  );
};

Column.propTypes = {
  dataId: PropTypes.string,
  width: PropTypes.number.isRequired,
  children: PropTypes.any,
};

export default Column;
