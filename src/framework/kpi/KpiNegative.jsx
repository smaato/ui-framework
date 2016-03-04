
import React, {
  Component,
  PropTypes,
} from 'react';
import Kpi from './Kpi.jsx';

class KpiNegative extends Component {

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

KpiNegative.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default KpiNegative;
