
import React, {
  Component,
  PropTypes
} from 'react';
import classNames from 'classnames';

export default class GridHeaderCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cellClass = classNames('dataTable__thead__cell', this.props.classes.headerCell);

    return (
      <div className={cellClass}>
        {this.props.content}
      </div>
    );
  }

}

GridHeaderCell.propTypes = {
  classes: React.PropTypes.object,
  content: React.PropTypes.string,
};
