
import React, {
  Component,
  PropTypes
} from 'react';
import GridCell from './GridCell.jsx';

export default class GridRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let rowClass;

    switch (this.props.section) {
      case 'header':
        rowClass = 'dataTable__thead__row';
        break;
      case 'body':
        rowClass = 'dataTable__tbody__row';
        break;
      case 'footer':
        rowClass = 'dataTable__tfoot__row';
        break;
    }
    
    if (this.props.appendClass) {
      rowClass += this.props.appendClass;
    }

    let content = this.props.cells.map((cell, index) => {
      return <GridCell
        section={this.props.section}
        appendClass={this.props.appendClass}
        content={cell}
        key={index}
      />;
    });

    return (
      <div className={rowClass}>
        {content}
      </div>
    );
  }

}

GridRow.propTypes = {
  appendClass: PropTypes.string,
  cells: PropTypes.array.isRequired,
  section: React.PropTypes.oneOf(['header', 'body', 'footer']).isRequired,
};
