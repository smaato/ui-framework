
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
    let baseRowClass = [this.props.rootClass, 'tbody', 'row'].join('__');
    let rowClass = baseRowClass;
    if (this.props.appendClass) {
      rowClass += this.props.appendClass;
    }

    let content = this.props.cells.map((cell, index) => {
      return <GridCell
        rootClass={this.props.rootClass}
        appendClass={this.props.appendClass}
        content={cell}
        key={index}
      />;
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
