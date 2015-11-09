
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  GridKpi,
  GridKpiPositive,
  GridKpiNegative,
} from '../../../framework/framework.js';

export default class GridKpiExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="GridKpi">
          <Text>General KPI component.</Text>
          <GridKpi
            className="gridKpi gridKpi--positive"
            title="+1200%"
          >+1.2k%</GridKpi>
        </Example>

        <Example title="GridKpiPositive">
          <Text>Component to show positive change (wrapper around GridKpi).</Text>
          <GridKpiPositive
            title="+2400%"
          >+2.4k%</GridKpiPositive>
        </Example>


        <Example title="GridKpiNegative">
          <Text>Component to show negative change (wrapper around GridKpi).</Text>
          <GridKpiNegative
            title="-4800%"
          >-4.8k%</GridKpiNegative>
        </Example>

      </Page>
    );
  }

}
