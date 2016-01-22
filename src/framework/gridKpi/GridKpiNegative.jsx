
import React, {
  Component,
  PropTypes,
} from 'react';
import GridKpi from './GridKpi.jsx';

export default class GridKpiNegative extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridKpi
        className="gridKpi--negative"
        title={this.props.title}
      >
        {this.props.children}
      </GridKpi>
    );
  }
}

GridKpiNegative.propTypes = {
  title: PropTypes.string,
};
