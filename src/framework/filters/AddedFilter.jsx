
import React from 'react';

import Entity from '../services/Entity.js';
import RemoveFilterButton from './RemoveFilterButton.jsx';
import FilterValueEditor from './dropdown/FilterValueEditor.jsx';

const AddedFilter = props => {
  const title = `${props.filter.name} (${props.filter.type}): ${props.filter.value}`;

  return (
    <div className="addedFilter">
      <span
        className="addedFilter__text"
        title={title}
      >
        <strong className="addedFilter__name">
          {`${props.filter.name} (${props.filter.type})`}:
        </strong>
        {Entity.nbsp}
        {props.filter.value}
      </span>
      <RemoveFilterButton
        id={props.filter.id}
        onRemove={props.onRemove}
      />
    </div>
  );
};

AddedFilter.propTypes = {
  filter: FilterValueEditor.propTypes.filter,
  onRemove: RemoveFilterButton.propTypes.onRemove,
};

export default AddedFilter;
