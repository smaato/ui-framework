
import React from 'react/addons';
import TitleBar from './TitleBar.jsx';

const TestUtils = React.addons.TestUtils;

function renderShallowComponent(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

describe('TextInput', () => {
  function makeShallow() {
    return renderShallowComponent(
      <TitleBar
      />
    );
  }

  describe('Structure', () => {
    let titleBar;

    beforeEach(() => {
      titleBar = makeShallow(false);
    });

    it('is a div', () => {
      expect(titleBar.type).toEqual('div');
    });
  });
});
