
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
    let baseRowClass = [this.props.rootClass, this.props.section, 'row'].join('__');
    let rowClass = baseRowClass;
    // Only for thead. Sticky row
    if (this.props.placeholder) {
      rowClass += (' ' + baseRowClass + '--placeholder');
    }
    if (this.props.appendClass) {
      rowClass += this.props.appendClass;
    }

    let content = this.props.cells.map((cell, index) => {
      let cellProps = Object.assign({}, this.props, cell);
      delete cellProps.cells;
      return <GridCell {...cellProps} key={index} />;
    });

    return (
      <div className={rowClass}>
        {content}
      </div>
    );
  }

}

GridRow.propTypes = {
  cells: PropTypes.array.isRequired
};
