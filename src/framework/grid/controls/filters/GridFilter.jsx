
import React, {
  Component,
  PropTypes,
} from 'react';

import Entity from '../../../services/Entity.js';

export default class GridFilter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = `${this.props.name}: ${this.props.value}`;

    return (
      <div className="gridFilter">
        <span
          className="gridFilter__text"
          title={title}
        >
          <strong className="gridFilter__name">
            {this.props.name}:
          </strong>
          {Entity.nbsp}
          {this.props.value}
        </span>
        <span
          className="icon glyphicons-remove-2 gridFilter__remove"
          onClick={() => {
            this.props.onRemove.bind(this)(this.props.name);
          }}
        />
      </div>
    );
  }
}

GridFilter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onRemove: PropTypes.func.isRequired,
};
