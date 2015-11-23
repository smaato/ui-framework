
import 'd3';

import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { Chart } from '../../../framework/framework.js';

import chartExampleData from './chartExampleData.js';

export default class ChartExample extends Component {

  constructor(props) {
    super(props);

    let minDate = undefined;
    let maxDate = undefined;
    let minTemperature = undefined;
    let maxTemperature = undefined;

    // Identify the data sources to visualize.
    const cityChartData = [{
      name: 'newYork',
      color: '#1192ca',
      values: [],
    }, {
      name: 'sanFrancisco',
      color: '#F07171',
      values: [],
    }, {
      name: 'austin',
      color: '#60C04F',
      values: [],
    }];

    {
      const parseDate = d3.time.format('%Y%m%d').parse;

      chartExampleData.forEach(item => {
        for (const [index, city] of cityChartData.entries()) {
          // Format data.
          const date = parseDate(item.date);
          const temperature = +item[city.name];

          // Store formatted data point.
          cityChartData[index].values.push({
            date,
            temperature,
          });

          // Derive ranges.
          minDate = Math.min(minDate || date, date);
          maxDate = Math.max(maxDate || date, date);
          minTemperature = Math.min(minTemperature || temperature, temperature);
          maxTemperature = Math.max(maxTemperature || temperature, temperature);
        }
      });
    }

    this.state = {
      chartData: cityChartData,
      chartXRange: [minDate, maxDate],
      chartYRange: [minTemperature, maxTemperature],
      chartHeight: 400,
    };
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <Chart
            id="ChartExample"
            data={this.state.chartData}
            xRange={this.state.chartXRange}
            yRange={this.state.chartYRange}
            height={this.state.chartHeight}
          />
        </Example>
      </Page>
    );
  }

}
