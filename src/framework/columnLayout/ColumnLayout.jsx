
import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';

const ColumnLayout = props => {
  const layoutClassMap = {
    [ColumnLayout.LAYOUT.AUTO]: 'columnLayout--auto',
    [ColumnLayout.LAYOUT.HALF]: 'columnLayout--half',
    [ColumnLayout.LAYOUT.ONE_THIRD]: 'columnLayout--oneThird',
    [ColumnLayout.LAYOUT.ONE_FOURTH]: 'columnLayout--oneFourth',
    [ColumnLayout.LAYOUT.ONE_FIFTH]: 'columnLayout--oneFifth',
    [ColumnLayout.LAYOUT.TWO_FIFTHS]: 'columnLayout--twoFifths',
    [ColumnLayout.LAYOUT.ONE_SIXTH]: 'columnLayout--oneSixth',
  };

  const classes = classNames('columnLayout');

  function wrapChildren() {
    return props.children.map((entry, index) => (
      <div
        key={'column_' + `${index}`}
        className={layoutClassMap[props.layout[index]] ||
          'columnLayout--auto'}
      >
        {entry}
      </div>
    ));
  }

  const wrappedChildren = wrapChildren();

  return (
    <div className={classes}>
      {wrappedChildren}
    </div>
  );
};

ColumnLayout.LAYOUT = {
  AUTO: 'AUTO',
  HALF: 'HALF',
  ONE_THIRD: 'ONE_THIRD',
  ONE_FOURTH: 'ONE_FOURTH',
  ONE_FIFTH: 'ONE_FIFTH',
  TWO_FIFTHS: 'TWO_FIFTHS',
  ONE_SIXTH: 'ONE_SIXTH',
};

ColumnLayout.propTypes = {
  layout: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColumnLayout;
