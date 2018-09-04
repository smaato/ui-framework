
import d3 from 'd3';
import PropTypes from 'prop-types';
import React, {
  Component,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Box,
  Chart,
  LineChart,
  Text,
} from '../../../framework/framework';

import {
  Number,
} from '../../../framework/services';

import chartExampleData from './chartExampleData.js';

export default class ChartExample extends Component {

  constructor(props) {
    super(props);

    this.formatDate = d3.time.format('%B %e');

    this.state = Object.assign({
      chartData: undefined,
      chartHeight: 400,
      isBatch1: true,
      isLoading: false,
      isYAxisLeft: false,
      maxDate: undefined,
      maxTemperature: undefined,
      minDate: undefined,
      minTemperature: undefined,
    }, this.computeChartState(chartExampleData.batch1));

    this.legendLabelProvider = this.legendLabelProvider.bind(this);
    this.onClickChangeData = this.onClickChangeData.bind(this);
    this.onClickChangeHeight = this.onClickChangeHeight.bind(this);
    this.onClickToggleIsLoading = this.onClickToggleIsLoading.bind(this);
    this.onClickChangeYAxisOrientation =
      this.onClickChangeYAxisOrientation.bind(this);
    this.tooltipProviderChart = this.tooltipProviderChart.bind(this);
    this.tooltipProviderLineChart = this.tooltipProviderLineChart.bind(this);
  }

  onClickChangeData() {
    const batch =
      this.state.isBatch1 ? chartExampleData.batch2 : chartExampleData.batch1;

    this.setState(Object.assign(
      {
        isBatch1: !this.state.isBatch1,
      },
      this.computeChartState(batch)
    ));
  }

  onClickChangeHeight() {
    this.setState({
      chartHeight: 300 + Math.round(Math.random() * 300),
    });
  }

  onClickChangeYAxisOrientation() {
    this.setState({
      isYAxisLeft: !this.state.isYAxisLeft,
    });
  }

  onClickToggleIsLoading() {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  }

  computeChartState(rawData) {
    const chartData = [{
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
    const formatDate = d3.time.format('%Y%m%d').parse;

    let minDate;
    let maxDate;
    let minTemperature;
    let maxTemperature;

    rawData.forEach((item) => {
      chartData.forEach((chartDataPoint, index) => {
        // Format data.
        const date = formatDate(item.date);
        const temperature = +item[chartDataPoint.name];

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
      });
    });

    return {
      chartData,
      minDate,
      maxDate,
      minTemperature,
      maxTemperature,
    };
  }

  formatTemperature(value) {
    return `${value}${String.fromCharCode(176)} F`;
  }

  legendLabelProvider(dataSet) {
    const firstDate = new Date(dataSet[0].date);
    const lastDate = new Date(dataSet[(dataSet.length - 1)].date);

    return `${this.formatDate(firstDate)} - ${this.formatDate(lastDate)}`;
  }

  tooltipProviderChart(item) {
    const date = new Date(item.date);

    return (
      <Box roundedCorners>
        <div style={{ padding: 5 }}>
          <Text>
            {this.formatDate(date)}: {Number.formatBigNumber(item.yValue)}
          </Text>
        </div>
      </Box>
    );
  }

  tooltipProviderLineChart(item) {
    return (
      <Box roundedCorners>
        <div style={{ padding: 5 }}>
          <Text>
            {this.formatDate(item.date)}: {this.formatTemperature(item.yValue)}
          </Text>
        </div>
      </Box>
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example title="Chart">
          <button onClick={this.onClickToggleIsLoading}>
            Toggle &quot;isLoading&quot;
          </button>
          <Chart
            data={[[{
              date: 1460757600000,
              value: 733325005,
            }, {
              date: 1460844000000,
              value: 742834570,
            }, {
              date: 1460930400000,
              value: 785232401,
            }, {
              date: 1461016800000,
              value: 792343357,
            }, {
              date: 1461103200000,
              value: 739486125,
            }, {
              date: 1461189600000,
              value: 645349329,
            }, {
              date: 1461276000000,
              value: 649106631,
            }], [{
              date: 1460757600000,
              value: 581075302,
            }, {
              date: 1460844000000,
              value: 536493660,
            }, {
              date: 1460930400000,
              value: 553197315,
            }, {
              date: 1461016800000,
              value: 597245812,
            }, {
              date: 1461103200000,
              value: 675124444,
            }, {
              date: 1461189600000,
              value: 751889856,
            }, {
              date: 1461276000000,
              value: 790893300,
            }]]}
            description="Description"
            isLoading={this.state.isLoading}
            legendLabelProvider={this.legendLabelProvider}
            title="Title"
            tooltipProvider={this.tooltipProviderChart}
          />
        </Example>
        <Example title="LineChart">
          <button onClick={this.onClickChangeData}>
            Change data
          </button>
          <button onClick={this.onClickChangeHeight}>
            Change height
          </button>
          <button onClick={this.onClickChangeYAxisOrientation}>
            Change y axis orientation
          </button>
          <LineChart
            data={this.state.chartData}
            dateFormat={d3.time.weeks}
            dateRange={[this.state.minDate, this.state.maxDate]}
            height={this.state.chartHeight}
            isYAxisLeft={this.state.isYAxisLeft}
            tooltipProvider={this.tooltipProviderLineChart}
            yAxisFormat={this.formatTemperature}
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
