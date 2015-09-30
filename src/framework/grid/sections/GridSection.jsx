
import React, {
  Component,
  PropTypes
} from 'react';
import GridRow from './../GridRow.jsx';

export default class GridSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let rows = this.props.rows.map((row, index) => {
      return <GridRow
        section={this.props.section}
        appendClass={this.props.appendClass}
        cells={row}
        key={index}
      />;
    });

    let sectionClass;

    switch (this.props.section) {
      case 'header':
        sectionClass = 'dataTable__thead';
        break;
      case 'body':
        sectionClass = 'dataTable__tbody';
        break;
      case 'footer':
        sectionClass = 'dataTable__tfoot';
        break;
    }

    return (
      <div className={sectionClass}>
        {rows}
      </div>
    );
  }

}

GridSection.propTypes = {
  section: React.PropTypes.oneOf(['header', 'body', 'footer']).isRequired,
  rows: PropTypes.array.isRequired
};
