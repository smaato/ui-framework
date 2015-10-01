
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
    const cellClass = classNames('dataTable__tbody__cell', this.props.classes.bodyCell);

    return (
      <div className={cellClass}>
        {this.props.content}
      </div>
    );
  }

}

GridBodyCell.propTypes = {
  classes: React.PropTypes.object,
  content: React.PropTypes.string,
};
