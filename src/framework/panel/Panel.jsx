
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export {
  default as PanelLayout,
} from './PanelLayout.jsx';

export {
  default as PanelProgress,
} from './progress/PanelProgress.jsx';

const Panel = (props) => {
  const classes = classNames('panel', {
    'panel--compactWidth': props.isCompactWidth,
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
    <div data-testid="Panel" className={classes}>
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
  isCompactWidth: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isPadded: PropTypes.bool,
  isTitleUppercase: PropTypes.bool,
  title: PropTypes.string,
};

export default Panel;
