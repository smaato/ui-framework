
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const GridBodyCell = (props) => {
  const {
    canOverflow,
    ...innerCellProps
  } = props.innerCellProps;

  const classes = classNames('gridBodyCell', props.classBodyCell);
  const decoratedInnerCellProps = Object.assign({}, innerCellProps, {
    className: classNames(
      'gridBodyCellLiner',
      innerCellProps.className,
      {
        'gridBodyCellLiner--overflow': canOverflow,
      }
    ),
  });

  return (
    <td className={classes}>
      <div {...decoratedInnerCellProps} />
    </td>
  );
};

GridBodyCell.propTypes = {
  innerCellProps: PropTypes.object,
  // Classes
  classBodyCell: PropTypes.string,
};

GridBodyCell.defaultProps = {
  innerCellProps: {},
};

export default GridBodyCell;
