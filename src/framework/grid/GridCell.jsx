
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
    let cellClassNameMain = [this.props.rootClass, this.props.section, 'cell'].join('__');
    let cellClassName = cellClassNameMain;

    if (this.props.sortable) {
      cellClassName += ' sortable';
    }
    if (this.props.selected) {
      cellClassName += ' selected';
    }
    if (this.props.reverse) {
      cellClassName += ' reverse';
    }

    // Only for thead
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
    // Only for tbody
    } else if (this.props.content && this.props.contentWrap) {
      const contentWrap = this.props.contentWrap;
      let wrapClass = cellClassNameMain + 'Value';
      if (contentWrap.modifier) {
        // In theory could be many modifiers, but for now one is good enough
        wrapClass += '--' + contentWrap.modifier[0];
      }
      if (contentWrap.appendClass) {
        wrapClass += contentWrap.appendClass;
      }

      let wrapBefore = contentWrap.before;
      let wrapAfter = contentWrap.after;

      // Before and after can have its own wraps, that have the same props as contentWrap
      // TODO: extend this with modifier, href and same for before section
      if (contentWrap.after && contentWrap.afterWrap && contentWrap.afterWrap.appendClass) {
        let afterWrapClass = cellClassNameMain + contentWrap.afterWrap.appendClass;
        wrapAfter = <span className={afterWrapClass}>{contentWrap.after}</span>;
      }

      if (contentWrap.href) {
        cellContent = <a href={contentWrap.href} className={wrapClass}>
          {wrapBefore}
          {this.props.content}
          {wrapAfter}
        </a>
      } else {
        cellContent = <span className={wrapClass}>
          {wrapBefore}
          {this.props.content}
          {wrapAfter}
        </span>
      }
    } else if (this.props.content) {
      // TODO: Get rid of extra span
      cellContent = <span>{this.props.content}</span>;
    }

    const cellContentWrap =
      <span className={cellClassNameMain + 'Liner'}>
        { cellContent }
      </span>;

    return (
      <div className={cellClassName}>{cellContentWrap}</div>
    );
  }

}
