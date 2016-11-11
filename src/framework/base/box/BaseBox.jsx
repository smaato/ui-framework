
import classNames from 'classnames/dedupe';

import React, {
  PropTypes,
} from 'react';

const BaseBox = props => {
  const classes = classNames(props.classes, {
    roundedCorners: props.roundedCorners,
  });

  return (
    <div
      className={classes}
      data-id={props.dataId}
    >
      {props.children}
    </div>
  );
};

BaseBox.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string.isRequired,
  dataId: PropTypes.string,
  roundedCorners: PropTypes.bool,
};

export default BaseBox;
