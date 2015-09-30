
import React, {
  Component,
  PropTypes
} from 'react';
import GridRow from './../GridRow.jsx';

export default class GridSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let rows = this.props.rows.map((row, index) => {
      return <GridRow
        rootClass={this.props.rootClass}
        appendClass={this.props.appendClass}
        cells={row}
        key={index}
      />;
    });

    let sectionClass = [this.props.rootClass, 'tbody'].join('__');

    return (
      <div className={sectionClass}>
        {rows}
      </div>
    );
  }

}

GridSection.propTypes = {
  section: React.PropTypes.oneOf(['header', 'body', 'footer']),
  rows: PropTypes.array.isRequired
};

GridSection.defaultProps = {
  section: 'body'
};
