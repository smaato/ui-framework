
import React, {
  Component,
} from 'react';
import Kpi from './Kpi.jsx';

export default class KpiNegative extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Kpi
        className="kpi--negative"
        title={this.props.title}
      >
        {this.props.children}
      </Kpi>
    );
  }
}

KpiNegative.propTypes = Object.assign({}, Kpi.propTypes);
