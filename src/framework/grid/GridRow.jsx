
import React, {
  Component,
  PropTypes
} from 'react';
import GridCell from './GridCell.jsx';

export default class GridRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let rowClassName = [this.props.rootClass, this.props.section, 'row'].join('__');
    // Only for thead. Sticky row
    if (this.props.placeholder) {
      rowClassName += (' ' + rowClassName + '--placeholder');
    }

    let rowProps = this.props;
    let content = this.props.cells.map((cell, index) => {
      cell = cell || {};
      Object.assign(cell, rowProps);
      delete cell.cells;
      return <GridCell {...cell} key={index} />;
    });

    return (
      <div className={rowClassName}>
        {content}
      </div>
    );
  }

}

GridRow.propTypes = {
  cells: PropTypes.array.isRequired
};
