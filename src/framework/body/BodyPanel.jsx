
import classNames from 'classnames';
import React, {
  PropTypes,
} from 'react';

import Box from '../box/Box.jsx';

const BodyPanel = (props) => {
  const classes = classNames('bodyPanel', {
    'bodyPanel--topFlush': props.isTopFlush,
    'bodyPanel--bottomFlush': props.isBottomFlush,
  });

  return (
    <Box
      classes={classes}
      roundedCorners={props.roundedCorners}
    >
      {props.children}
    </Box>
  );
};

BodyPanel.propTypes = {
  children: Box.propTypes.children,
  isTopFlush: PropTypes.bool,
  isBottomFlush: PropTypes.bool,
  roundedCorners: Box.propTypes.roundedCorners,
};

export default BodyPanel;
