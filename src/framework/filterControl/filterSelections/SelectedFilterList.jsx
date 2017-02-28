
import React, {
  PropTypes,
} from 'react';

import Entity from '../../services/string/Entity.js';
import ConditionChecker from '../../services/filter/ConditionChecker';

const SelectedFilterList = (props) => {
  const conditionCheckerItems =
    props.conditionCheckers.map((conditionChecker, index) => {
      const filterName = conditionChecker.filter.name;
      const title =
        `${filterName} (${conditionChecker.comparisonType}):` +
        `${conditionChecker.comparisonValue}`;
      const onRemoveSelectedFilter =
        props.onRemoveSelectedFilter.bind(null, conditionChecker);

      return (
        <div className="selectedFilterListItem" key={index}>
          <span
            className="selectedFilterListItem__label"
            title={title}
          >
            <strong className="selectedFilterListItem__name">
              {filterName}:
            </strong>
            {Entity.nbsp}
            {conditionChecker.humanizeComparisonValue()}
          </span>

          <div className="selectedFilterListItem__removeButtonContainer">
            <span
              className="css-icon cross"
              onClick={onRemoveSelectedFilter}
            />
          </div>
        </div>
      );
    }
  );

  return (
    <div className="selectedFilterList">
      {conditionCheckerItems}
    </div>
  );
};

SelectedFilterList.propTypes = {
  conditionCheckers: PropTypes.arrayOf(
    PropTypes.instanceOf(ConditionChecker)
  ).isRequired,
  onRemoveSelectedFilter: PropTypes.func.isRequired,
};

export default SelectedFilterList;
