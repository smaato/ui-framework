
import React, {
  Component,
  PropTypes
} from 'react';
import GridRow from './GridRow.jsx';
import GridCell from './GridCell.jsx';

export default class GridSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionProps = this.props;

    // Enable sticky thead
    // Note: causes only one row to be rendered in thead, other rows are ignored
    if (sectionProps.thead) {
      let firstTheadRow = sectionProps.thead[0];
      sectionProps.thead = [
        firstTheadRow,
        Object.assign({ placeholder: true }, firstTheadRow)
      ];
    }

    let rows = this.props.rows.map(function (row, index) {
      let rowProps = Object.assign(row, sectionProps);
      delete rowProps.rows;
      return <GridRow {...rowProps} key={index} />;
    });

    let sectionClass = [this.props.rootClass, this.props.section].join('__');

    return (
      <div className={sectionClass}>{rows}</div>
    );
  }

}

GridSection.propTypes = {
  section: React.PropTypes.oneOf(['thead', 'tbody', 'tfoot']),
  rows: PropTypes.array.isRequired
};

GridSection.defaultProps = {
  section: 'tbody'
};
