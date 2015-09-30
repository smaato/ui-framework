
import React, {
  Component,
  PropTypes
} from 'react';
import classnames from 'classnames';
import GridCell from './GridCell.jsx';

export default class GridRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let rowClass;

    switch (this.props.section) {
      case 'header':
        rowClass = classnames('dataTable__thead__row', this.props.classes.headerRow);
        break;
      case 'body':
        rowClass = classnames('dataTable__tbody__row', this.props.classes.bodyRow);
        break;
      case 'footer':
        rowClass = classnames('dataTable__tfoot__row', this.props.classes.footerRow);
        break;
    }

    let content = this.props.cells.map((cell, index) => {
      return <GridCell
        section={this.props.section}
        classes={this.props.classes}
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
  classes: PropTypes.object,
  cells: PropTypes.array.isRequired,
  section: React.PropTypes.oneOf(['header', 'body', 'footer']).isRequired,
};
