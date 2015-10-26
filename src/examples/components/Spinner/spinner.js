
import React from 'react';
import renderComponent from '../../renderComponent.js';
import { Spinner } from '../../../framework/index.js';

export default function() {
  renderComponent(
    'spinner',
    <Spinner id="checkboxExample" />
  );
}
