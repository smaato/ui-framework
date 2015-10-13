
import React from 'react/addons';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Sizzle from 'sizzle';

const createComponent = function createComponent(reactComponent) {
  const component = TestUtils.renderIntoDocument(reactComponent);
  return component;
};

export class TestCase {

  constructor(reactComponent) {
    this.component = createComponent(reactComponent);
    this.dom = React.findDOMNode(this.component);
  }

  click(node = this.dom) {
    TestUtils.Simulate.click(node);
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
  simulate: TestUtils.Simulate,
  getDom: ReactDOM.findDOMNode,
};
