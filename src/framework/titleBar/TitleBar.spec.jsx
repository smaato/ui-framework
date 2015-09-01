
import React from 'react/addons';
import TitleBar from './TitleBar.jsx';

const TestUtils = React.addons.TestUtils;

function renderShallowComponent(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

describe('TextInput', () => {

  function makeShallow(isValid) {
    return renderShallowComponent(
      <TitleBar
      />
    );
  }

  describe('Structure', () => {

    let titleBar;

    beforeEach(function() {
      titleBar = makeShallow(false);
    });

    it('is a div', function() {
      expect(titleBar.type).toEqual('div');
    });

  });

});
