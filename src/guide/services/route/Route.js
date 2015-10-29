
import { slugifyEach } from '../string/Slug';

// Components
import CheckBoxExample from '../../views/checkBox/CheckBoxExample.jsx';
import GridExample from '../../views/grid/GridExample.jsx';
import IconExample from '../../views/icon/IconExample.jsx';
import SpinnerExample from '../../views/spinner/SpinnerExample.jsx';
import TitleBarExample from '../../views/titleBar/TitleBarExample.jsx';

// Integrations
import GridViewExample from '../../views/gridView/GridViewExample.jsx';

// Component route names should match the component name exacty.
const components = [{
  name: 'CheckBox',
  component: CheckBoxExample,
}, {
  name: 'Grid',
  component: GridExample,
}, {
  name: 'Icon',
  component: IconExample,
}, {
  name: 'Spinner',
  component: SpinnerExample,
}, {
  name: 'TitleBar',
  component: TitleBarExample,
}];

// Integration names should be descriptive and utilize spaces.
const integrations = [{
  name: 'Grid View',
  component: GridViewExample,
}];

export default {
  components: slugifyEach(components, 'name', 'path'),
  integrations: slugifyEach(integrations, 'name', 'path'),
  getList: function getList() {
    const list = this.components.concat(this.integrations);
    return list;
  },
};
