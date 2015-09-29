
import React, {
  Component,
  PropTypes
} from 'react';
import gridUtils from './gridUtils.js';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let baseCellClass = [this.props.rootClass, this.props.section, 'cell'].join('__');

    let cell = gridUtils.generateCell(this.props, baseCellClass);

    return (
      <div className={cell.cellClass}>
        <span className={baseCellClass + 'Liner'}>
          {cell.cellContent}
        </span>
      </div>
    );
  }

}
