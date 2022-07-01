
import classNames from 'classnames';
import keyMirror from 'keymirror';
import PropTypes from 'prop-types';
import React from 'react';

const SummaryControl = (props) => {
  let icon;

  if (props.type) {
    const typeToIconClassMap = {
      [SummaryControl.TYPE.ALLOWED]: 'icon-check-green',
      [SummaryControl.TYPE.NOT_ALLOWED]: 'icon-not-allowed-red',
      [SummaryControl.TYPE.ATTACHMENT]: 'icon-paperclip',
    };

    const iconClasses = classNames(
      'summaryControl__icon icon',
      typeToIconClassMap[props.type]
    );

    icon = <div className={iconClasses} />;
  }

  let cogIcon;

  if (!props.isStatic) {
    cogIcon = <div className="summaryControl__cogIcon icon icon-cog" />;
  }

  const classes = classNames('summaryControl', {
    'summaryControl--static': props.isStatic,
  });

  return (
    <div
      data-testid="SummaryControl"
      data-id={props.dataId}
      className={classes}
      onClick={props.isStatic ? undefined : props.onClick}
    >
      {icon}

      <span className="summaryControl__label">
        {props.children}
      </span>

      {cogIcon}
    </div>
  );
};

SummaryControl.TYPE = keyMirror({
  ALLOWED: null,
  NOT_ALLOWED: null,
  ATTACHMENT: null,
});

SummaryControl.propTypes = {
  dataId: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isStatic: PropTypes.bool,
};

export default SummaryControl;
