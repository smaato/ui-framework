
import classNames from 'classnames';
import React, {
  PropTypes,
} from 'react';

import BaseBox from '../base/box/BaseBox.jsx';

const BodyPanel = props => {
  const classes = classNames('bodyPanel', {
    'bodyPanel--topFlush': props.isTopFlush,
  });

  return (
    <BaseBox classes={classes}>
      {props.children}
    </BaseBox>
  );
};

BodyPanel.propTypes = {
  children: PropTypes.any,
  isTopFlush: PropTypes.bool,
};

export default BodyPanel;
