
import React, {
  PropTypes,
} from 'react';

import Entity from '../services/Entity.js';
import RemoveFilterButton from './RemoveFilterButton.jsx';

const AddedFilter = props => {
  const title = `${props.label} (${props.type}): ${props.value}`;

  return (
    <div className="addedFilter">
      <span
        className="addedFilter__text"
        title={title}
      >
        <strong className="addedFilter__name">
          {`${props.label} (${props.type})`}:
        </strong>
        {Entity.nbsp}
        {props.value}
      </span>
      <RemoveFilterButton
        id={props.id}
        onRemove={props.onRemove}
      />
    </div>
  );
};

AddedFilter.propTypes = {
  id: RemoveFilterButton.propTypes.id,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onRemove: RemoveFilterButton.propTypes.onRemove,
};

export default AddedFilter;
