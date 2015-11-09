
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
    let cellClass;
    let content;

    if (this.props.sortEnabled) {
      cellClass = classNames(
        'grid__header__cell',
        'sortable',
        this.props.sortBy === this.props.cellIndex ? 'selected' : null,
        this.props.sortDesc ? null : 'reverse'
      );

      const sortFunc = () => {
        this.props.sortFunc(this.props.cellIndex);
      };

      content = (
        <a
          onClick={sortFunc}
        >
          {this.props.content}
          {String.fromCharCode(160)}
          <span className="arrowUp">
            <span className="arrowUp__centerLine"></span>
          </span>
          <span className="arrowDown">
            <span className="arrowDown__centerLine"></span>
          </span>
        </a>
      );
    } else {
      cellClass = classNames(
        'grid__header__cell',
        this.props.classHeaderCell
      );
      content = this.props.content;
    }

    return (
      <div className={cellClass}>
        <div className="grid__header__cellLiner">
          {content}
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
  // Sorting
  cellIndex: PropTypes.number,
  sortEnabled: PropTypes.bool,
  sortDesc: PropTypes.bool,
  sortBy: PropTypes.number,
  sortFunc: PropTypes.func,
};
