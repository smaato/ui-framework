
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridHeaderRow from '../rows/GridHeaderRow.jsx';

export default class GridHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionClass = classNames('dataTable__thead', this.props.classes.header);

    return (
      <div className={sectionClass}>
        <GridHeaderRow
          classes={this.props.classes}
          cells={this.props.cells}
        />
      </div>
    );
  }

}

GridHeader.propTypes = {
  classes: PropTypes.object,
  cells: PropTypes.array.isRequired,
};
