
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Box from '../box/Box.jsx';

const BodyPanel = (props) => {
  const classes = classNames('bodyPanel', props.panelClasses, {
    'bodyPanel--bottomFlush': props.isBottomFlush,
    'bodyPanel--topFlush': props.isTopFlush,
  });

  return (
    <Box
      data-testid="BodyPanel"
      classes={classes}
      roundedCorners={props.roundedCorners}
    >
      {props.children}
    </Box>
  );
};

BodyPanel.propTypes = {
  children: Box.propTypes.children,
  isBottomFlush: PropTypes.bool,
  isTopFlush: PropTypes.bool,
  panelClasses: PropTypes.string,
  roundedCorners: Box.propTypes.roundedCorners,
};

export default BodyPanel;
