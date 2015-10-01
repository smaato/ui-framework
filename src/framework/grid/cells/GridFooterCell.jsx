
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';

export default class GridFooterCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cellClass = classNames('dataTable__tfoot__cell', this.props.classes.footerCell);

    return (
      <div className={cellClass}>
        {this.props.content}
      </div>
    );
  }

}

GridFooterCell.propTypes = {
  classes: React.PropTypes.object,
  content: React.PropTypes.string,
};
