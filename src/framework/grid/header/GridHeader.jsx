
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import GridHeaderRow from './GridHeaderRow.jsx';

export default class GridHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionClass = classNames('grid__header', this.props.classHeader);

    return (
      <div className={sectionClass}>
        <GridHeaderRow
          classHeaderRow={this.props.classHeaderRow}
          classHeaderCell={this.props.classHeaderCell}
          cells={this.props.cells}
          // Sorting
          sortColumnIndexes={this.props.sortColumnIndexes}
          sortDesc={this.props.sortDesc}
          sortByColumnIndex={this.props.sortByColumnIndex}
          onSort={this.props.onSort}
        />
      </div>
    );
  }

}

GridHeader.propTypes = {
  classHeader: PropTypes.string,
  classHeaderRow: PropTypes.string,
  classHeaderCell: PropTypes.string,
  cells: PropTypes.array.isRequired,
  // Sorting
  sortColumnIndexes: PropTypes.array,
  sortDesc: PropTypes.bool,
  sortByColumnIndex: PropTypes.number,
  onSort: PropTypes.func,
};
