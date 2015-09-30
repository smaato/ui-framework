
import React, {
  Component,
  PropTypes
} from 'react';
import classnames from 'classnames';
import GridRow from './../GridRow.jsx';

export default class GridSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let sectionClass;

    let rows = this.props.rows.map((row, index) => {
      return <GridRow
        section={this.props.section}
        classes={this.props.classes}
        cells={row}
        key={index}
      />;
    });

    switch (this.props.section) {
      case 'header':
        sectionClass = classnames('dataTable__thead', this.props.classes.header);
        break;
      case 'body':
        sectionClass = classnames('dataTable__tbody', this.props.classes.body);
        break;
      case 'footer':
        sectionClass = classnames('dataTable__tfoot', this.props.classes.footer);
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
  classes: PropTypes.object,
  section: React.PropTypes.oneOf(['header', 'body', 'footer']).isRequired,
  rows: PropTypes.array.isRequired,
};
