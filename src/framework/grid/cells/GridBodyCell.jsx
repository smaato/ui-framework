
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';

export default class GridBodyCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cellClass = classNames('dataTable__tbody__cell', this.props.classBodyCell);

    return (
      <div className={cellClass}>
        {this.props.content}
      </div>
    );
  }

}

GridBodyCell.propTypes = {
  classBodyCell: React.PropTypes.string,
  content: React.PropTypes.string,
};
