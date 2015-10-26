
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridHeaderCell from './GridHeaderCell.jsx';

export default class GridHeaderRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const rowClass = classNames('dataTable__thead__row', this.props.classHeaderRow);

    const content = this.props.cells.map((cell, index) => {
      return (
        <GridHeaderCell
          classHeaderCell={this.props.classHeaderCell}
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

GridHeaderRow.propTypes = {
  classHeaderRow: PropTypes.string,
  classHeaderCell: PropTypes.string,
  cells: PropTypes.array.isRequired,
};
