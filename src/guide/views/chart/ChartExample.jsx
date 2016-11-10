
/* global d3 */
import 'd3';

import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import { LineChart } from '../../../framework/framework';

import chartExampleData from './chartExampleData.js';

export default class ChartExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: this.getInitialChartData(),
      minDate: undefined,
      maxDate: undefined,
      minTemperature: undefined,
      maxTemperature: undefined,
      chartHeight: 400,
      useBatch1: false,
    };

    this.onClickChangeData = this.onClickChangeData.bind(this);
    this.onClickChangeHeight = this.onClickChangeHeight.bind(this);
  }

  componentDidMount() {
    this.setData(chartExampleData.batch1);
  }

  onClickChangeData() {
    this.setState({
      useBatch1: !this.state.useBatch1,
    });
    if (this.state.useBatch1) {
      this.setData(chartExampleData.batch1);
    } else {
      this.setData(chartExampleData.batch2);
    }
  }

  onClickChangeHeight() {
    this.setState({
      chartHeight: 300 + Math.round(Math.random() * 300),
    });
  }

  setData(rawData) {
    const chartData = this.getInitialChartData();
    let minDate = undefined;
    let maxDate = undefined;
    let minTemperature = undefined;
    let maxTemperature = undefined;

    {
      const formatDate = d3.time.format('%Y%m%d').parse;

      rawData.forEach(item => {
        for (const [index, city] of chartData.entries()) {
          // Format data.
          const date = formatDate(item.date);
          const temperature = +item[city.name];

          // Store formatted data point.
          chartData[index].values.push({
            date,
            yValue: temperature,
          });

          // Derive ranges.
          minDate = Math.min(minDate || date, date);
          maxDate = Math.max(maxDate || date, date);
          minTemperature = Math.min(minTemperature || temperature, temperature);
          maxTemperature = Math.max(maxTemperature || temperature, temperature);
        }
      });
    }

    this.setState({
      chartData,
      minDate,
      maxDate,
      minTemperature,
      maxTemperature,
    });
  }

  getInitialChartData() {
    return [{
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
  }

  render() {
    function formatTemperature(value) {
      return `${value}${String.fromCharCode(176)} F`;
    }

    return (
      <Page title={this.props.route.name}>
        <Example>
          <button
            onClick={this.onClickChangeData}
          >
            Change data
          </button>
          <button
            onClick={this.onClickChangeHeight}
          >
            Change height
          </button>
          <LineChart
            data={this.state.chartData}
            dateRange={[this.state.minDate, this.state.maxDate]}
            dateFormat={d3.time.months}
            yAxisRange={[this.state.minTemperature, this.state.maxTemperature]}
            yAxisFormat={formatTemperature}
            yAxisLabelWidth={36}
            height={this.state.chartHeight}
          />
        </Example>
      </Page>
    );
  }

}

ChartExample.propTypes = {
  route: PropTypes.object.isRequired,
};
