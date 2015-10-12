
import React from 'react/addons';
import Sizzle from 'sizzle';

const ReactTestUtils = React.addons.TestUtils;

const createComponent = function createComponent(reactComponent) {
  const component = ReactTestUtils.renderIntoDocument(reactComponent);
  return component;
};

export class TestCase {

  constructor(reactComponent) {
    this.component = createComponent(reactComponent);
    this.dom = React.findDOMNode(this.component);
  }

  click(node = this.dom) {
    ReactTestUtils.Simulate.click(node);
  }

  // Mimic $.find()
  find(selector, node = this.dom) {
    const results = new Sizzle(selector, node);
    return results;
  }

  // Mimic $.first()
  first(selector, node = this.dom) {
    const results = new Sizzle(selector, node);
    if (results.length === 0) return undefined;
    return results[0];
  }

}

export default {
  createComponent: createComponent,
  simulate: ReactTestUtils.Simulate,
  getDom: React.findDOMNode,
};
