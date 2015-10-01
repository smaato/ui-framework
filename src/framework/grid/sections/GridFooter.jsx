
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';
import GridFooterRow from '../rows/GridFooterRow.jsx';

export default class GridFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionClass = classNames('dataTable__tfoot', this.props.classes.footer);

    const rows = this.props.rows.map((row, index) => {
      return <GridFooterRow
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

GridFooter.propTypes = {
  classes: PropTypes.object,
  rows: PropTypes.array.isRequired,
};
