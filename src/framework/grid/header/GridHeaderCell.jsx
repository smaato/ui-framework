
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

    if (this.props.sorting && this.props.sorting.sortable) {
      cellClass = classNames(
        'grid__header__cell',
        'sortable',
        this.props.sorting.selected ? 'selected' : null,
        this.props.sorting.reverse ? 'reverse' : null
      );

      const sortingFunc = () => {
        this.props.sortingFunc(this.props.index);
      };

      content = (
        <a
          onClick={sortingFunc}
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
  sorting: PropTypes.object,
  sortingFunc: PropTypes.func,
  index: PropTypes.number,
};
