
import {
  Filter,
  FilterMethods,
} from '../../../framework/framework.js';

export default [
  new Filter({
    name: 'ID',
    getValue: item => item.id,
    methods: [
      FilterMethods.CONTAINS,
      FilterMethods.MIN,
      FilterMethods.MAX,
    ],
  }),
  new Filter({
    name: 'Name',
    getValue: item => item.name,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Status',
    getValue: item => item.status,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Fuel',
    getValue: item => item.fuel,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Passengers',
    getValue: item => item.passengers,
    methods: [
      FilterMethods.CONTAINS,
      FilterMethods.MIN,
      FilterMethods.MAX,
    ],
  }),
  new Filter({
    name: 'Cylinders',
    getValue: item => item.cylinders,
    methods: [
      FilterMethods.CONTAINS,
      FilterMethods.MIN,
      FilterMethods.MAX,
    ],
  }),
  new Filter({
    name: 'Fuel Economy',
    getValue: item => item.fuelEconomy,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Sold',
    getValue: item => item.sold,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Registered',
    getValue: item => item.registered,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Kpi Sold',
    getValue: item => item.kpiSold,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
  new Filter({
    name: 'Kpi Registered',
    getValue: item => item.kpiRegistered,
    methods: [
      FilterMethods.CONTAINS,
    ],
  }),
];
