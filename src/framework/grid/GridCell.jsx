
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
    } else if (this.props.content && this.props.preset) {
      const preset = this.props.preset;
      let presetClass = [this.props.rootClass, 'tbody', 'cellValue'].join('__');
      if (preset.modifier) {
        // In theory could be many modifiers, but for now one is good enough
        presetClass += preset.modifier[0];
      }
      if (preset.appendClass) {
        presetClass += preset.appendClass;
      }
      if (preset.href) {
        cellContent = <a href={preset.href} className={presetClass}>
          {preset.before}
          {this.props.content}
          {preset.after}
        </a>
      } else {
        cellContent = <span className={presetClass}>
          {preset.before}
          {this.props.content}
          {preset.after}
        </span>
      }

    } else if (this.props.content) {
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
