
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const ColumnLayout = props => {
  const layoutClassMap = {
    [ColumnLayout.LAYOUT.ONE_THIRD]: 'columnLayout--oneThird',
    [ColumnLayout.LAYOUT.TWO_THIRDS]: 'columnLayout--twoThirds',
    [ColumnLayout.LAYOUT.ONE_FOURTH]: 'columnLayout--oneFourth',
    [ColumnLayout.LAYOUT.ONE_FIFTH]: 'columnLayout--oneFifth',
    [ColumnLayout.LAYOUT.TWO_FIFTHS]: 'columnLayout--twoFifths',
    [ColumnLayout.LAYOUT.ONE_SIXTH]: 'columnLayout--oneSixth',
  };

  const classes = classNames('columnLayout', layoutClassMap[props.layout]);

  return (
    <div className={classes}>

      <div className="columnLayout__left">
        {props.left}
      </div>

      <div className="columnLayout__right">
        {props.right}
      </div>
    </div>
  );
};

ColumnLayout.LAYOUT = {
  ONE_THIRD: 'ONE_THIRD',
  TWO_THIRDS: 'TWO_THIRDS',
  ONE_FOURTH: 'ONE_FOURTH',
  ONE_FIFTH: 'ONE_FIFTH',
  TWO_FIFTHS: 'TWO_FIFTHS',
  ONE_SIXTH: 'ONE_SIXTH',
};

ColumnLayout.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
  layout: PropTypes.string.isRequired,
};

ColumnLayout.defaultProps = {
  layout: ColumnLayout.LAYOUT.ONE_THIRD,
};

export default ColumnLayout;
