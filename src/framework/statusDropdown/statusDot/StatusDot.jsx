
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const StatusDot = props => {
  const classMap = {
    [StatusDot.STATUS.NEGATIVE]: 'statusDot--negative',
    [StatusDot.STATUS.POSITIVE]: 'statusDot--positive',
  };

  const labelClasses = classNames('statusDot', classMap[props.status]);

  return (
    <div className={labelClasses} />
  );
};

StatusDot.STATUS = {
  NEGATIVE: 'NEGATIVE',
  POSITIVE: 'POSITIVE',
};

StatusDot.propTypes = {
  status: PropTypes.string,
};

export default StatusDot;
