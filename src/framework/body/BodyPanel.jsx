
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const BodyPanel = props => {
  const classes = classNames('bodyPanel', {
    'bodyPanel--topFlush': props.isTopFlush,
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

BodyPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  isTopFlush: PropTypes.bool,
};

export default BodyPanel;
