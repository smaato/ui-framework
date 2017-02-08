
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as BodyMaxWidthLayout,
} from './BodyMaxWidthLayout.jsx';

export {
  default as BodyPanel,
} from './BodyPanel.jsx';

export {
  default as BodyPanelItem,
} from './BodyPanelItem.jsx';

const Body = (props) => {
  const classes = classNames('body', {
    'body--dark': props.isDark,
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.any,
  isDark: PropTypes.bool,
};

export default Body;
