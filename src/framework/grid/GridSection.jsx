
import React, {
  Component,
  PropTypes
} from 'react';
import GridRow from './GridRow.jsx';
import GridCell from './GridCell.jsx';

export default class GridSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let rows;
    if (this.props.rows) {
      const sectionProps = this.props;
      rows = this.props.rows.map(function (row) {
        let rowProps = Object.assign(row, sectionProps);
        delete rowProps.rows;
        if (row.cells) {
          return <GridRow {...rowProps} />;
        } else {
          // TODO: test this, it most likely does not work
          return <GridRow {...rowProps}>
            {row.props.children}
          </GridRow>;
        }
      });
    } else {
      rows = this.props.children;
    }

    let sectionEl;
    let sectionClassName = [this.props.rootClass, this.props.section].join('__');
    switch (this.props.section) {
    case 'thead':
      sectionEl = <thead className={sectionClassName}>{rows}</thead>;
      break;
    case 'tfoot':
      sectionEl = <tfoot className={sectionClassName}>{rows}</tfoot>;
      break;
    default:
      sectionEl = <tbody className={sectionClassName}>{rows}</tbody>;
      break;
    }

    return (
      // TODO: figure out a way to get rid of div wrapper
      <div>
      { sectionEl }
      </div>
    );
  }

}

GridSection.propTypes = {
  sectionTag: PropTypes.string,
  rows: PropTypes.array
};

GridSection.defaultProps = {
  section: 'tbody'
};
