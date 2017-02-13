
import React from 'react';
import Kpi from './Kpi.jsx';

const KpiNegative = props => (
  <Kpi
    className="kpi--negative"
    title={props.title}
  >
    {props.children}
  </Kpi>
);

KpiNegative.propTypes = Object.assign({}, Kpi.propTypes);

export default KpiNegative;
