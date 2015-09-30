
import React, {
  Component,
  PropTypes
} from 'react';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cellClass;
    let insideClass;

    switch (this.props.section) {
      case 'header':
        cellClass = 'dataTable__thead__cell';
        insideClass = 'dataTable__thead__cellLiner';
        break;
      case 'body':
        cellClass = 'dataTable__tbody__cell';
        insideClass = 'dataTable__tbody__cellLiner';
        break;
      case 'footer':
        cellClass = 'dataTable__tfoot__cell';
        insideClass = 'dataTable__tfoot__cellLiner';
        break;
    }
    
    return (
      <div className={cellClass}>
        <span className={insideClass}>
          {this.props.content}
        </span>
      </div>
    );
  }

}

GridCell.propTypes = {
  section: React.PropTypes.oneOf(['header', 'body', 'footer']).isRequired,
};
