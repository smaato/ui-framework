
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import keyMirror from 'keymirror';

const SummaryControl = props => {
  let icon;

  if (props.type) {
    const typeToIconClassMap = {
      [SummaryControl.TYPE.ALLOWED]: 'icon-check-green',
      [SummaryControl.TYPE.NOT_ALLOWED]: 'icon-not-allowed-red',
      [SummaryControl.TYPE.ATTACHMENT]: 'icon-paperclip',
    };

    const iconClasses = classNames(
      'summaryControlIcon icon',
      typeToIconClassMap[props.type]
    );

    icon = <div className={iconClasses} />;
  }

  return (
    <div
      data-id={props.dataId}
      className="summaryControl"
      onClick={props.onClick}
    >
      {icon}
      <span className="summaryControl__label">
        {props.children}
      </span>
      <div className="summaryControl__cogIcon icon icon-cog" />
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
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default SummaryControl;
