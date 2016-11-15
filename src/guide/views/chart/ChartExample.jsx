
/* global d3 */
import 'd3';

import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Chart,
  LineChart,
} from '../../../framework/framework';

import chartExampleData from './chartExampleData.js';

export default class ChartExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: this.getInitialChartData(),
      chartHeight: 400,
      isLoading: false,
      minDate: undefined,
      maxDate: undefined,
      minTemperature: undefined,
      maxTemperature: undefined,
      useBatch1: false,
    };

    this.onClickChangeData = this.onClickChangeData.bind(this);
    this.onClickChangeHeight = this.onClickChangeHeight.bind(this);
    this.onClickToggleIsLoading = this.onClickToggleIsLoading.bind(this);
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

  onClickToggleIsLoading() {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  }

  setData(rawData) {
    const chartData = this.getInitialChartData();
    const formatDate = d3.time.format('%Y%m%d').parse;
    let minDate = undefined;
    let maxDate = undefined;
    let minTemperature = undefined;
    let maxTemperature = undefined;

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

  legendLabelProvider(dataSet) {
    const dateFormat = d3.time.format('%B %e');
    const firstDate = new Date(dataSet[0].date);
    const lastDate = new Date(dataSet[(dataSet.length - 1)].date);

    return `${dateFormat(firstDate)} - ${dateFormat(lastDate)}`;
  }

  render() {
    function formatTemperature(value) {
      return `${value}${String.fromCharCode(176)} F`;
    }

    return (
      <Page title={this.props.route.name}>
        <Example title="Chart">
          <button onClick={this.onClickToggleIsLoading}>
            Toggle "isLoading"
          </button>
          <Chart
            data={[[{
              date: 1460757600000,
              value: 30,
            }, {
              date: 1460844000000,
              value: 31,
            }, {
              date: 1460930400000,
              value: 33,
            }, {
              date: 1461016800000,
              value: 32,
            }, {
              date: 1461103200000,
              value: 22,
            }, {
              date: 1461189600000,
              value: 30,
            }, {
              date: 1461276000000,
              value: 31,
            }], [{
              date: 1460757600000,
              value: 25,
            }, {
              date: 1460844000000,
              value: 24,
            }, {
              date: 1460930400000,
              value: 28,
            }, {
              date: 1461016800000,
              value: 29,
            }, {
              date: 1461103200000,
              value: 27,
            }, {
              date: 1461189600000,
              value: 25,
            }, {
              date: 1461276000000,
              value: 26,
            }]]}
            isLoading={this.state.isLoading}
            legendLabelProvider={this.legendLabelProvider}
            title="Title"
          />
        </Example>
        <Example title="LineChart">
          <button onClick={this.onClickChangeData}>
            Change data
          </button>
          <button onClick={this.onClickChangeHeight}>
            Change height
          </button>
          <LineChart
            data={this.state.chartData}
            dateFormat={d3.time.weeks}
            dateRange={[this.state.minDate, this.state.maxDate]}
            height={this.state.chartHeight}
            yAxisFormat={formatTemperature}
            yAxisLabelWidth={36}
            yAxisRange={[this.state.minTemperature, this.state.maxTemperature]}
          />
        </Example>
      </Page>
    );
  }

}

ChartExample.propTypes = {
  route: PropTypes.object.isRequired,
};
