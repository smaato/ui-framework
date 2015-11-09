
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
          sortColumns={this.props.sortColumns}
          sortDesc={this.props.sortDesc}
          sortBy={this.props.sortBy}
          sortFunc={this.props.sortFunc}
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
  sortColumns: PropTypes.array,
  sortDesc: PropTypes.bool,
  sortBy: PropTypes.number,
  sortFunc: PropTypes.func,
};
