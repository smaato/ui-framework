
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class GridHeaderCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const cellClass = classNames('dataGrid__header__cell', this.props.classHeaderCell);

    return (
      <div className={cellClass}>
        <div className="dataGrid__header__cellLiner">
          {this.props.content}
        </div>
      </div>
    );
  }

}

GridHeaderCell.propTypes = {
  classHeaderCell: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};
