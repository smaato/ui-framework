
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridBodyCell from './GridBodyCell.jsx';

export default class GridBodyRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rowClass = classNames('dataTable__tbody__row', this.props.classBodyRow);

    const content = this.props.cells.map((cell, index) => {
      return (
        <GridBodyCell
          classBodyCell={this.props.classBodyCell}
          content={cell}
          key={index}
        />
      );
    });

    return (
      <div className={rowClass}>
        {content}
      </div>
    );
  }

}

GridBodyRow.propTypes = {
  classBodyRow: PropTypes.string,
  classBodyCell: PropTypes.string,
  cells: PropTypes.array.isRequired,
};
