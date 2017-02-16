
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

  const labelClasses = classNames('panel__titleLabel', {
    'panel__titleLabel--uppercase': props.isTitleUppercase,
  });

  const contentClasses = classNames('panel__content', {
    'panel__content--padded': props.isPadded,
    'panel__content--centered': props.isCentered,
  });

  return (
    <div className={classes}>
      <div className="panel__title">
        <div className={labelClasses}>
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
  actions: PropTypes.any,
  children: PropTypes.any,
  isCentered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
  isTitleUppercase: PropTypes.bool,
  title: PropTypes.string,
};

export default Panel;
