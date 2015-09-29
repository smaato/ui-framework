
import React, {
  Component,
  PropTypes
} from 'react';
import GridUtils from './GridUtils.js';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let baseCellClass = [this.props.rootClass, this.props.section, 'cell'].join('__');

    let gridUtils = new GridUtils({
      props: this.props,
      baseCellClass,
    });

    let cell = gridUtils.generateCell();

    return (
      <div className={cell.cellClass}>
        <span className={baseCellClass + 'Liner'}>
          {cell.cellContent}
        </span>
      </div>
    );
  }

}
