
import FilterTypes from './FilterTypes.js';

export default [
  {
    name: 'ID',
    getValue: item => item.id,
    types: [
      FilterTypes.CONTAINS,
      FilterTypes.MIN,
      FilterTypes.MAX,
    ],
  },
  {
    name: 'Name',
    getValue: item => item.name,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Status',
    getValue: item => item.status,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Fuel',
    getValue: item => item.fuel,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Passengers',
    getValue: item => item.passengers,
    types: [
      FilterTypes.CONTAINS,
      FilterTypes.MIN,
      FilterTypes.MAX,
    ],
  },
  {
    name: 'Cylinders',
    getValue: item => item.cylinders,
    types: [
      FilterTypes.CONTAINS,
      FilterTypes.MIN,
      FilterTypes.MAX,
    ],
  },
  {
    name: 'Fuel Economy',
    getValue: item => item.fuelEconomy,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Sold',
    getValue: item => item.sold,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Registered',
    getValue: item => item.registered,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Kpi Sold',
    getValue: item => item.kpiSold,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
  {
    name: 'Kpi Registered',
    getValue: item => item.kpiRegistered,
    types: [
      FilterTypes.CONTAINS,
    ],
  },
];
