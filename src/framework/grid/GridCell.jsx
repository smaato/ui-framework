
import React, {
  Component,
  PropTypes
} from 'react';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cellContent;
    let cellClassName = [this.props.rootClass, this.props.section, 'cell'].join('__');

    if (this.props.sortable) {
      cellClassName += ' sortable';
    }
    if (this.props.selected) {
      cellClassName += ' selected';
    }
    if (this.props.reverse) {
      cellClassName += ' reverse';
    }

    if (this.props.content && this.props.sortable) {
      cellContent = <a>
        {this.props.content}
        <span className="arrowUp">
          <span className="arrowUp__centerLine"></span>
        </span>
        <span className="arrowDown">
          <span className="arrowDown__centerLine"></span>
        </span>
      </a>;
    } else if (this.props.content && !this.props.sortable) {
      // TODO: Get rid of extra span
      cellContent = <span>{this.props.content}</span>;
    } else {
      // TODO: Get rid of extra span
      cellContent = <span>{this.props.children}</span>;
    }

    const cellContentWrap = <span className={[this.props.rootClass, this.props.section, 'cellLiner'].join('__')}>
        { cellContent }
      </span>;

    const cellEl = this.props.section === 'thead' ?
      <th className={cellClassName}>{cellContentWrap}</th> :
      <td className={cellClassName}>{cellContentWrap}</td>;

    return (
      // TODO: figure out a way to get rid of div wrapper
      <div>
        {cellEl}
      </div>
    );
  }

}

GridCell.propTypes = {
  section: PropTypes.string
};
