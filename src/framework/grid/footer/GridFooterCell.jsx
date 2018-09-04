
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const GridFooterCell = (props) => {
  const classes = classNames('grid__footer__cell', props.classFooterCell, {
    'grid__footer__cell--divider': props.innerCellProps.children,
    'grid__footer__cell--firstDivider': props.isFirstCellWithChildren,
  });
  const decoratedInnerCellProps = Object.assign({}, props.innerCellProps, {
    className: classNames(
      'grid__footer__cell__liner',
      props.innerCellProps.className
    ),
  });

  return (
    <th className={classes}>
      <div {...decoratedInnerCellProps} />
    </th>
  );
};

GridFooterCell.propTypes = {
  classFooterCell: PropTypes.string,
  innerCellProps: PropTypes.object,
  isFirstCellWithChildren: PropTypes.bool,
};

GridFooterCell.defaultProps = {
  innerCellProps: {},
};

export default GridFooterCell;
