
import React, {
  PropTypes,
} from 'react';
import FilterValueEditor from './FilterValueEditor.jsx';

const AvailableFilters = props => {
  const availableFilters = props.availableFilters.map((availableFilter, availableFilterIndex) => {
    const name = availableFilter.name;
    const types = availableFilter.types;
    const getValue = availableFilter.getValue;
    return types.map(
      (type, filterTypeIndex) => {
        const filter = {
          name,
          getValue,
          type,
        };
        return (
          <div
            className="availableFilter"
            key={`${availableFilterIndex}:${filterTypeIndex}`}
            onClick={() => props.onClick(filter)}
          >
            {types.length === 1 ? name : `${name} (${type})`}
          </div>
        );
      }
    );
  });

  return (
    <div className="availableFilters">
      {availableFilters}
    </div>
  );
};

AvailableFilters.propTypes = {
  availableFilters: PropTypes.arrayOf(FilterValueEditor.propTypes.filter).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AvailableFilters;
