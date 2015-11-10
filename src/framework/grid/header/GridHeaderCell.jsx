
import React, {
  Component,
  PropTypes,
} from 'react';
import classNames from 'classnames';

export default class GridHeaderCell extends Component {

  constructor(props) {
    super(props);
  }

  renderCellClass() {
    if (this.props.sortEnabled) {
      return classNames(
        'grid__header__cell',
        'sortable',
        this.props.sortBy === this.props.cellIndex ? 'selected' : null,
        this.props.sortDesc ? null : 'reverse'
      );
    }

    return classNames(
      'grid__header__cell',
      this.props.classHeaderCell
    );
  }

  renderContent() {
    if (this.props.sortEnabled) {
      const sortFunc = () => this.props.sortFunc(this.props.cellIndex);

      return (
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
  sortDesc: PropTypes.bool,
  sortBy: PropTypes.number,
  sortFunc: PropTypes.func,
};
