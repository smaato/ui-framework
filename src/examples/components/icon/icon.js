
import React from 'react';
import renderComponent from '../../renderComponent.js';
import {
  Icon,
  IconCog,
  IconEllipsis,
} from '../../../framework/framework.js';

export default function() {
  renderComponent('icon', (
    <Icon className="glyphicons-cogwheel" />
  ));
  renderComponent('icon-ellipsis', (
    <IconEllipsis />
  ));
  renderComponent('icon-cog', (
    <IconCog />
  ));
}
