
import {
  FilterOption,
  ComparisonTypes,
} from '../../../framework/services.js';

export default [
  new FilterOption({
    name: 'ID',
    getValue: item => item.id,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
      ComparisonTypes.MIN,
      ComparisonTypes.MAX,
    ],
  }),
  new FilterOption({
    name: 'Name',
    getValue: item => item.name,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
  new FilterOption({
    name: 'Status',
    getValue: item => item.status,
    comparisonTypes: [
      ComparisonTypes.ONE_OF,
    ],
    comparisonParameters: {
      oneOfOptions: ['Active', 'Stopped', 'Archived'],
    },
  }),
  new FilterOption({
    name: 'Fuel',
    getValue: item => item.fuel,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
  new FilterOption({
    name: 'Passengers',
    getValue: item => item.passengers,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
      ComparisonTypes.MIN,
      ComparisonTypes.MAX,
    ],
  }),
  new FilterOption({
    name: 'Cylinders',
    getValue: item => item.cylinders,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
      ComparisonTypes.MIN,
      ComparisonTypes.MAX,
    ],
  }),
  new FilterOption({
    name: 'Fuel Economy',
    getValue: item => item.fuelEconomy,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
  new FilterOption({
    name: 'Sold',
    getValue: item => item.sold,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
  new FilterOption({
    name: 'Registered',
    getValue: item => item.registered,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
  new FilterOption({
    name: 'Kpi Sold',
    getValue: item => item.kpiSold,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
  new FilterOption({
    name: 'Kpi Registered',
    getValue: item => item.kpiRegistered,
    comparisonTypes: [
      ComparisonTypes.CONTAINS,
    ],
  }),
];
