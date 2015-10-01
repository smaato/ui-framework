
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

    const rows = this.props.rows.map((row, index) => {
      return <GridHeaderRow
        classes={this.props.classes}
        cells={row}
        key={index}
      />;
    });

    return (
      <div className={sectionClass}>
        {rows}
      </div>
    );
  }

}

GridHeader.propTypes = {
  classes: PropTypes.object,
  rows: PropTypes.array.isRequired,
};
