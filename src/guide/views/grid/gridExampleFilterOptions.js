
import {
  ComparisonTypes,
  FilterOption,
} from '../../../framework/services.js';

export default [
  new FilterOption({
    name: 'Max ID',
    getValue: item => item.id,
    comparisonType: ComparisonTypes.MAX,
  }),
  new FilterOption({
    name: 'Min ID',
    getValue: item => item.id,
    comparisonType: ComparisonTypes.MIN,
  }),
  new FilterOption({
    name: 'Name',
    getValue: item => item.name,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Fuel',
    getValue: item => item.fuel,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Maximum Number of Passengers',
    getValue: item => item.passengers,
    comparisonType: ComparisonTypes.MAX,
  }),
  new FilterOption({
    name: 'Minimum Number of Passengers',
    getValue: item => item.passengers,
    comparisonType: ComparisonTypes.MIN,
  }),
  new FilterOption({
    name: 'Cylinders',
    getValue: item => item.cylinders,
    comparisonType: ComparisonTypes.MIXED_TYPE_VALUE,
  }),
  new FilterOption({
    name: 'Fuel Economy',
    getValue: item => item.fuelEconomy,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Kpi Sold',
    getValue: item => item.kpiSold,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Kpi Registered',
    getValue: item => item.kpiRegistered,
    comparisonType: ComparisonTypes.CONTAINS,
  }),
  new FilterOption({
    name: 'Release Date Range',
    getValue: item => item.releaseDate,
    comparisonType: ComparisonTypes.DATE_RANGE,
  }),
];
