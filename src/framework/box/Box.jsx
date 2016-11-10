
import classNames from 'classnames/dedupe';
import React from 'react';

import BaseBox from '../base/box/BaseBox.jsx';

const Box = props => {
  const classes = classNames(Box.defaultProps.classes, props.classes);
  const extendedProps = Object.assign({}, props, {
    classes,
  });

  return (
    <BaseBox
      {...extendedProps}
    />
  );
};

Box.propTypes = Object.assign({}, BaseBox.propTypes);

Box.defaultProps = {
  classes: 'box',
};

export default Box;
