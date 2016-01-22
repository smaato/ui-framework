
import React, {
  Component,
  PropTypes,
} from 'react';
import GridKpi from './GridKpi.jsx';

export default class GridKpiPositive extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridKpi
        className="gridKpi--positive"
        title={this.props.title}
      >
        {this.props.children}
      </GridKpi>
    );
  }
}

GridKpiPositive.propTypes = {
  title: PropTypes.string,
};
