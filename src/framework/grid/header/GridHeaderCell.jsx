
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';
import Entity from '../../services/Entity';

export default class GridHeaderCell extends Component {

  constructor(props) {
    super(props);
  }

  renderCellClass() {
    if (this.props.sortEnabled) {
      return classNames(
        'grid__header__cell',
        'sortable',
        this.props.sortedColumnIndex === this.props.cellIndex ? 'selected' : null,
        this.props.isSortDescending ? null : 'reverse'
      );
    }

    return classNames(
      'grid__header__cell',
      this.props.classHeaderCell
    );
  }

  renderContent() {
    if (this.props.sortEnabled) {
      const onSort = () => this.props.onSort(this.props.cellIndex);

      return (
        <a
          onClick={onSort}
        >
          {this.props.content}
          {Entity.nbsp}
          <span className="arrowUp">
            <span className="arrowUp__centerLine"></span>
          </span>
          <span className="arrowDown">
            <span className="arrowDown__centerLine"></span>
          </span>
        </a>
      );
    }

    return this.props.content;
  }

  render() {
    const cellClass = this.renderCellClass();
    const content = this.renderContent();

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
  isSortDescending: PropTypes.bool,
  sortedColumnIndex: PropTypes.number,
  onSort: PropTypes.func,
};
