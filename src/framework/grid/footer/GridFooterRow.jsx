
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridFooterCell from './GridFooterCell.jsx';

export default class GridFooterRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rowClass = classNames('dataTable__tfoot__row', this.props.classFooterRow);

    const content = this.props.cells.map((cell, index) => {
      return (
        <GridFooterCell
          classFooterCell={this.props.classFooterCell}
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

GridFooterRow.propTypes = {
  classFooterRow: PropTypes.string,
  classFooterCell: PropTypes.string,
  cells: PropTypes.array.isRequired,
};
