
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Sizzle from 'sizzle';

const createComponent = function createComponent(reactComponent) {
  const component = TestUtils.renderIntoDocument(reactComponent);
  return component;
};

export default class TestCase {

  constructor(reactComponent) {
    this.component = createComponent(reactComponent);
    this.dom = ReactDOM.findDOMNode(this.component);
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
