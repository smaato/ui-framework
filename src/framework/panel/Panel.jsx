
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

export {
  default as PanelLayout,
} from './PanelLayout.jsx';

export {
  default as PanelProgress,
} from './progress/PanelProgress.jsx';

const Panel = (props) => {
  const classes = classNames('panel', {
    'panel--fullWidth': props.isFullWidth,
  });

  const contentClasses = classNames('panel__content', {
    'panel__content--padded': props.isPadded,
    'panel__content--centered': props.isCentered,
  });

  return (
    <div className={classes}>
      <div className="panel__title">
        <div className="panel__titleLabel">
          {props.title}
        </div>
        <div className="panel__actions">
          {props.actions}
        </div>
      </div>

      <div className={contentClasses}>
        {props.children}
      </div>
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.any,
  isFullWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
  isCentered: PropTypes.bool,
};

export default Panel;
