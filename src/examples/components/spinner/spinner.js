
import React from 'react';
import renderComponent from '../../renderComponent.js';
import { Spinner } from '../../../framework/framework.js';

export default function() {
  renderComponent(
    'spinner',
    <Spinner id="checkboxExample" />
  );
}
