
import React, {
  Component,
  PropTypes
} from 'react';

export default class GridCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const section = this.props.section ? this.props.section : 'tbody';
    let cellClassName = 'dataTable__' + section + '__cell';
    if (this.props.sortable) {
      cellClassName += ' sortable';
    }
    if (this.props.selected) {
      cellClassName += ' selected';
    }
    if (this.props.reverse) {
      cellClassName += ' reverse';
    }

    const cellContent = <span className={'dataTable__' + section + '__cellLiner'}>
        {this.props.children}
      </span>;

    const cellEl = section === 'thead' ?
      <th className={cellClassName}>{cellContent}</th> :
      <td className={cellClassName}>{cellContent}</td>;

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
