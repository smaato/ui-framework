
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cellClass;
    let insideClass;

    switch (this.props.section) {
      case 'header':
        cellClass = classNames('dataTable__thead__cell', this.props.classes.headerCell);
        insideClass = 'dataTable__thead__cellLiner';
        break;
      case 'body':
        cellClass = classNames('dataTable__tbody__cell', this.props.classes.bodyCell);
        insideClass = 'dataTable__tbody__cellLiner';
        break;
      case 'footer':
        cellClass = classNames('dataTable__tfoot__cell', this.props.classes.footerCell);
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
  classes: React.PropTypes.object,
  content: React.PropTypes.string,
  section: React.PropTypes.oneOf(['header', 'body', 'footer']).isRequired,
};
