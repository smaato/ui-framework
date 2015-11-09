
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
    const rowClass = classNames('grid__header__row', this.props.classHeaderRow);

    const content = this.props.cells.map((cell, index) => {
      const isSortEnabled = this.props.sortColumns ?
        this.props.sortColumns.some(item => item === index) :
        false;

      return (
        <GridHeaderCell
          classHeaderCell={this.props.classHeaderCell}
          content={cell}
          key={index}
          // Sorting
          cellIndex={index}
          sortEnabled={isSortEnabled}
          sortDesc={this.props.sortDesc}
          sortBy={this.props.sortBy}
          sortFunc={this.props.sortFunc}
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
  // Sorting
  sortColumns: PropTypes.array,
  sortDesc: PropTypes.bool,
  sortBy: PropTypes.number,
  sortFunc: PropTypes.func,
};
