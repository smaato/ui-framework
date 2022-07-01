
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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
    <div data-testid="Body" className={classes}>
      {props.children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.any,
  isDark: PropTypes.bool,
};

export default Body;
