
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
    let rowClassNameMain = [this.props.rootClass, this.props.section, 'row'].join('__');
    let rowClassName = rowClassNameMain;
    // Only for thead. Sticky row
    if (this.props.placeholder) {
      rowClassName += (' ' + rowClassNameMain + '--placeholder');
    }
    if (this.props.appendClass) {
      rowClassName += this.props.appendClass;
    }

    let content = this.props.cells.map((cell, index) => {
      let cellProps = Object.assign({}, this.props, cell);
      delete cellProps.cells;
      return <GridCell {...cellProps} key={index} />;
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
