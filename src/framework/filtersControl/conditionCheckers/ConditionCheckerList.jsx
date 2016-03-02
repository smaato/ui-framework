
import React, {
  PropTypes,
} from 'react';
import TestUtils from '../../../services/TestUtils';

import Entity from '../../services/string/Entity.js';
import ConditionChecker from '../../services/filter/ConditionChecker';

const ConditionCheckerList = props => {
  const conditionCheckerItems = props.conditionCheckers
  .map((conditionChecker, index) => {
    const filterName = conditionChecker.filter.name;
    const title = TestUtils.cleanString(
      `${filterName} (${conditionChecker.comparisonType}):
       ${conditionChecker.comparisonValue}`
    );
    const onRemoveConditionChecker = props.onRemoveConditionChecker
      .bind(null, conditionChecker);

    return (
      <div className="conditionCheckerListItem" key={index}>
        <span
          className="conditionCheckerListItem__label"
          title={title}
        >
          <strong className="conditionCheckerListItem__name">
            {`${filterName} (${conditionChecker.comparisonType})`}:
          </strong>
          {Entity.nbsp}
          {conditionChecker.comparisonValue}
        </span>

        <span
          className="
            icon
            glyphicons-remove-2
            conditionCheckerListItem__removeButton
          "
          onClick={onRemoveConditionChecker}
        />
      </div>
    );
  });

  return (
    <div className="conditionCheckerList">
      {conditionCheckerItems}
    </div>
  );
};

ConditionCheckerList.propTypes = {
  conditionCheckers: PropTypes.arrayOf(
    PropTypes.instanceOf(ConditionChecker)
  ).isRequired,
  onRemoveConditionChecker: PropTypes.func.isRequired,
};

export default ConditionCheckerList;
