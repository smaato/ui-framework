
import React, {
  PropTypes,
} from 'react';

import Entity from '../../services/Entity.js';
import FilterMatcher from '../../services/FilterMatcher';

const FilterMatchersList = props => {
  const filterMatcherItems = props.filterMatchers.map((filterMatcher, index) => {
    const filterName = filterMatcher.filter.name;
    const title =
      `${filterName} (${filterMatcher.filterMethod}): ${filterMatcher.valueToMatch}`;

    return (
      <div className="filterMatchersListItem" key={index}>
        <span
          className="filterMatchersListItem__label"
          title={title}
        >
          <strong className="filterMatchersListItem__name">
            {`${filterName} (${filterMatcher.filterMethod})`}:
          </strong>
          {Entity.nbsp}
          {filterMatcher.valueToMatch}
        </span>

        <span
          className="icon glyphicons-remove-2 filterMatchersListItem__removeButton"
          onClick={props.onRemoveFilterMatcher.bind(null, filterMatcher)}
        />
      </div>
    );
  });

  return (
    <div className="filterMatchersList">
      {filterMatcherItems}
    </div>
  );
};

FilterMatchersList.propTypes = {
  filterMatchers: PropTypes.arrayOf(PropTypes.instanceOf(FilterMatcher)).isRequired,
  onRemoveFilterMatcher: PropTypes.func.isRequired,
};

export default FilterMatchersList;

