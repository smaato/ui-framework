
import React from 'react';
import Kpi from './Kpi.jsx';

const KpiPositive = props => (
  <Kpi
    className="kpi--positive"
    title={props.title}
  >
    {props.children}
  </Kpi>
);

KpiPositive.propTypes = Object.assign({}, Kpi.propTypes);

export default KpiPositive;
