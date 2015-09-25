
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
    if (this.props.placeholder) {
      rowClassName += (' ' + rowClassName + '--placeholder');
    }

    let content;

    if (this.props.cells) {
      let rowProps = this.props;
      content = this.props.cells.map((cell) => {
        cell = cell || {};
        Object.assign(cell, rowProps);
        delete cell.cells;
        return <GridCell {...cell}/>;
      });
    } else {
      content = this.props.children;
    }

    return (
      <tr className={rowClassName}>
        {content}
      </tr>
    );
  }

}

GridRow.propTypes = {
  section: PropTypes.string,
  cells: PropTypes.array
};
