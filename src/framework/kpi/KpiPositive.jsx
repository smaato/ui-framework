
import React, {
  Component,
} from 'react';
import Kpi from './Kpi.jsx';

export default class KpiPositive extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Kpi
        className="kpi--positive"
        title={this.props.title}
      >
        {this.props.children}
      </Kpi>
    );
  }
}

KpiPositive.propTypes = Object.assign({}, Kpi.propTypes);
