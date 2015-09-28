
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
      rows = this.props.rows.map(function (row, index) {
        let rowProps = Object.assign(row, sectionProps);
        delete rowProps.rows;
        if (row.cells) {
          return <GridRow {...rowProps} key={index} />;
        } else {
          // TODO: Most likely this does not work
          return <GridRow {...rowProps} key={index}>
            {row.props.children}
          </GridRow>;
        }
      });
    } else {
      rows = this.props.children;
    }

    let sectionClassName = [this.props.rootClass, this.props.section].join('__');

    return (
      <div className={sectionClassName}>{rows}</div>
    );
  }

}

GridSection.propTypes = {
  section: React.PropTypes.oneOf(['thead', 'tbody', 'tfoot']),
  rows: PropTypes.array
};

GridSection.defaultProps = {
  section: 'tbody'
};
